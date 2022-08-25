import { db } from "@/firebase/config"
import { ref } from "vue";

let error = ref(null);

let useCreatePost = async(x)=>{
    try{

        let res = await db.collection("posts").add(x)
        
        if(!res){
            throw new Error("can't create post");
        }
    }catch(err){
        error.value = err.message;
    }
}

let getCreatePost = ()=>{
    return {error,useCreatePost}
}

export  {getCreatePost};