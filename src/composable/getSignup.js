import { ref } from "vue";
import {auth} from "../firebase/config"

let error = ref(null);

let createAcc = async(email,password,name)=>{
   try{

       let res = await auth.createUserWithEmailAndPassword(email,password);
       if(!res){
        throw new Error("can't create account")
       }
       res.user.updateProfile({displayName:name})
       console.log(res);
       return res;
    }
    catch(err){
        error.value = err.message;
        console.log(error);
    }

}

let getSignup = ()=>{

    return {createAcc,error};
}

export  {getSignup};