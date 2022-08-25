<template>
  
    <div class="singlePost" >
        <div class="header">
            <p>{{post.owner}}</p>
            <p>3 min ago</p>
        </div>
        <div class="header">
            <router-link to="/profile">
                <h2>{{post.title}}</h2>
            </router-link>
            <div class="box-2">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-trash-can" @click="showDeletePost =! showDeletePost"></i>
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
        </div>
        <p>{{post.detail}}</p>
    </div>
    <div class="modal" v-if="showDeletePost">
        <div class="main_modal">
            <p>Are you sure want to delete?</p>
            <button @click="showDeletePost = false">No</button>
            <button @click="deletePost">Yes</button>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';

import {getDetePost} from '../composable/getDeletePost'
export default {
    props:["post"],
    setup(props) {

        let showDeletePost = ref(false);

        let {error,delPost}= getDetePost();
        
        let deletePost =()=>{
            
            let id = props.post.id;
            // let currentId = id.filter((doc)=>{
            //     return doc === id;
            // })
            let res = delPost(id);
            if(res){
                alert("it work")
            }
        }
        // console.log(props.post.id)

        return {deletePost,showDeletePost};
    }

}
</script>

<style>
    .singlePost{
        width: 90%;
        margin: 10px auto;
        padding: 20px;
        border-radius: 5px;
        background-color: black;
    }
    .singlePost h2{
        margin-bottom: 15px;
    }
    .header{
        display: flex;
        justify-content: space-between;
    }
    .box-2 i{
        font-size: 20px;
        margin:10px ;
        cursor: pointer;
    }
    .modal{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color:rgba(0, 0, 0, 0.363);
    }
    .main_modal{
        font-size: 20px;
        font-weight: bold;
        max-width: 400px;
        padding: 20px;
        margin: 50px auto;
        background-color: #fff;
        border-radius: 10px;
    }
    .main_modal p{
        margin-bottom: 15px;
    }
    .main_modal button{
        background-color: red;
        margin-left: 10px;
    }
</style>