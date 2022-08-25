<template>
  <div class="create">
    <form @submit.prevent="createPost">
        <h1>CreatePost</h1>
        <input type="text" placeholder="ownerName" v-model="owner">
        <input type="text" placeholder="title" v-model="title">
        <textarea placeholder="detail" v-model="detail" ></textarea>
        <button>upload</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {getCreatePost} from '../composable/getCreatePost'
import getUser from '@/composable/getUser';
import { auth } from '@/firebase/config';
export default {
    setup(props) {
        let owner = ref("");
        let title = ref("");
        let detail = ref("");

        let user = auth.currentUser;
        owner.value = user.displayName;
        // owner.value ; 
        let {error,useCreatePost} = getCreatePost();
        let createPost = ()=>{
            let newPost = {
                owner:owner.value,
                title:title.value,
                detail:detail.value
            }
            let res = useCreatePost(newPost);
            if(res){
                alert("complete create new post");
            }
            owner.value = "",
            title.value = "",
            detail.value = ""
        }

        return {owner,title,detail,createPost,error,user};
    }
}
</script>

<style >
    /* form{
        width: 100%;
        padding: 10px ;
        background-color: black;
    }
    form h1{
        margin-top: 15px;
        margin-bottom: 10px ;
    }
    input{
        width: 90%;

    }
    textarea{
        width:90%;     
        height: 40px;
        margin-bottom: 10px;
        border: none;
        border-radius: 4px;
        padding: 5px 10px;
        outline:none ;
        box-shadow: 3px 3px 2px #ff0000, inset -3px -3px 10px #fff;
    } */

</style>
