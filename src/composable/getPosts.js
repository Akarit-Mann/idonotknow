
import { ref } from "vue";

import {db} from '../firebase/config'

let getPosts = ()=>{


    let posts = ref([]);

    let error = ref("");

    let load = async()=>{
      try{

        // let res = await db.collection("posts").get()
        
        // posts.value = res.docs.map((doc)=>{
        //   return {id:doc.id,...doc.data()};
        // })
         db.collection("posts").onSnapshot((snap)=>{
            let result = [];
            snap.docs.forEach((doc)=>{
                let document = {id:doc.id,...doc.data()};
                result.push(document);
            })
            posts.value = result;
        })


      }catch(err){
        error.value = err.message;
        console.log(err.message)
      }
    }
    return {posts,error,load};

}

export default getPosts;