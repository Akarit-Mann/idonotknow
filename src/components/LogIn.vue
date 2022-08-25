<template>

  <form @submit.prevent="logIn" class="login">
              <h1>Login Account</h1>

              <label >Email</label>
              <input type="email" v-model="email" required >

              <label >Password</label>
              <input type="password" v-model="password" required>

              <button>Login</button>
          </form>

  <!-- <form @submit.prevent="work">
    
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <div v-if="error" class="error"> {{error}}</div>
    <button>work</button>
  </form> -->
</template>

<script>
import { ref } from '@vue/reactivity'
// import {getSignup} from '../composable/getSignup'
import { useRouter } from 'vue-router';
import {getLogin} from '../composable/getLogin'
export default {
    setup(props) {
        // let name = ref("");
        let email = ref("");
        let password = ref("");
        let router = useRouter();
        let {signInAcc,error} = getLogin();

        let logIn = async()=>{
           let res = await signInAcc(email.value,password.value);
            if(res){
                router.push("/about")
            }

        }

        return{email,password,logIn,error};
    }
}
</script>

<style>

  .login h1{
    margin-bottom: 30px !important;
  }

</style>