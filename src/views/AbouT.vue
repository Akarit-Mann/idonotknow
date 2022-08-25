<template>
  <div v-if="user" class="container">
    <div class="col_1">

      <div class="nav">
        <div >
          <h1>{{user.displayName}}</h1>
          <p>{{user.email}}</p>
        </div>
        <button @click="logOut">Logout</button>  
      </div>
      
    </div>
    <div class="col_2">

      <PostS :posts="posts"></PostS>

    </div>
    <div class="col_3">
      <CreatePost></CreatePost>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase/config'

import CreatePost from '../components/CreatePost'

import PostS from '../components/PostS'
import getPosts from '../composable/getPosts'
import  getUser from '../composable/getUser'
import { useRouter } from 'vue-router'
export default {
  components: {
    CreatePost, PostS },
  
    setup(props) {
      // let posts = ref([]);
      let {user} = getUser();
      let router = useRouter();

       let {posts,error,load} = getPosts();

      load();

      let logOut = async()=>{
        try{
          let res = await auth.signOut();
          let user = auth.currentUser;
        if(!user){
          router.push("/")
        }
          
        }catch(err){
          console.log(err.message);
        }
      } 

      
      // console.log(posts);
      return {posts,load,error,user,logOut};

    }

    

}
</script>

<style>
  
  .container{
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    color: red;
    position: relative;
  }
  .col_2{
    padding: 0 10px;
    overflow: scroll;
    scroll-behavior: unset;
    text-align: justify;
  }
  .col_1{
    width: 30%;
    background-color: blue;

  }
  .col_2{
    width: 40%;
  }
  .col_3{
    width: 30%;
    background-color:black;

  }
  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px ;
  }
</style>
