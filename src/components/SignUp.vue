<template>

    <form @submit.prevent="signUp">
              <h1>Create Account</h1>
              <label >Name</label>
              <input type="text" v-model="name"  required >

              <label >Email</label>
              <input type="email" v-model="email" required >

              <label >Password</label>
              <input type="password" v-model="password" required>

              <button>Sign Up</button>
          </form>
  <!-- <form @submit.prevent="signUp">
    <input type="text" v-model="name" placeholder="Name" required>
    <input type="email" v-model="email" placeholder="Email" required>
    <input type="password" v-model="password" placeholder="Password" required>
    <div v-if="errorMsg" class="error">{{errorMsg}}</div>
    <div v-if="error" class="error">{{error}}</div>
    <button>signUp</button>
  </form> -->
</template>

<script>
import { ref } from '@vue/reactivity'
import {getSignup} from '../composable/getSignup'
import { useRouter } from 'vue-router';
export default {
    setup(props) {
        let name = ref("");
        let email = ref("");
        let password = ref("");
        let errorMsg = ref(null);

        let router = useRouter();
        let {createAcc,error} = getSignup();

        

        let signUp = async()=>{
            if(password.value.length < 6 ){
                errorMsg.value = "your password is too weak to create accunt!"
                
            }
            else{
                let res = await createAcc(email.value,password.value,name.value);
                if(res){
                    router.push("/about")
                }
            }

        }


        return{name,email,password,signUp,error,errorMsg}
    }
}
</script>

<style>


</style>