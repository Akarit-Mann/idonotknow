import { db } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null);

let delPost = async(id)=>{
    try{


        let res = await db.collection("posts").doc(id).delete();

        console.log(res);

        if(!res){
            throw new Error("can't delete post");
        }
        return res;
    }catch(err){
        error.value = err.message;
        console.log(err.message)
    }
}
let getDetePost = ()=>{
    return {error,delPost};
}

export {getDetePost};