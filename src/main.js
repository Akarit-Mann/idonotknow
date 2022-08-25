import { createApp } from 'vue'
import App from './App.vue'
import { auth } from './firebase/config';
import router from './router'
import "./assets/global.css"
let app;
auth.onAuthStateChanged( _=>{
    if(!app){
        app =createApp(App).use(router).mount('#app')

    }   
})


