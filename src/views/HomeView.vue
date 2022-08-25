<template>
  <div class="home">
    
    <!-- <div v-if="showLogin">
      <LogIn></LogIn>
      <div>if your not member? <span @click="showLogin =! showLogin">create Account?</span></div>
    </div>
    <div v-else>
      <div>if your a member? <span @click="showLogin =! showLogin">login Account?</span></div>
    </div> -->

      <div class="Acccontainer">
        <div class="card">
            <div>
                <i class="fa-solid fa-face-smile icon"></i>
                <h1>"Welcome from YouthDev"</h1>
                <!-- <div > -->
                  <button @click="showLogin =! showLogin">
                    <p v-if="showLogin">Login Account</p>
                    <p v-else>SignUp Account</p>
                    </button>
                <!-- </div> -->
                <!-- <div v-else>
                  <button @click="showLogin =! showLogin">SignUp Account</button>
                </div> -->
        </div>
        </div>
        <div>
          <div v-if="showLogin ">
            <SignUp></SignUp>
          </div>
          <div v-else>
            <LogIn></LogIn>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'


// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    LogIn,
    SignUp,
  },
  setup(props) {
    let showLogin = ref(false);

    return {showLogin};
  }
}
</script>
<style>
  /* .home{
    width: 100%;
    height: 100vh;
    
  } */
</style>