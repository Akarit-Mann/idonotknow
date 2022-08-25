import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null);

let signInAcc = async (email,password)=>{
    try{

        let res = await auth.signInWithEmailAndPassword(email,password);
        if(!res){
            throw new Error("can't login account");
        }
        return res;
    }catch(err){
        error.value = err.message;
        console.log(error);
    }
}

let getLogin = ()=>{

    return {signInAcc,error};
}

export {getLogin};