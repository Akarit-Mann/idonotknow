import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AbouT from '../views/AbouT'
import { auth } from '@/firebase/config'
import ProfilE from '../views/ProfilE'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if(!user){
        next();
      }else{
        next({name:"about"})
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component:AbouT,
    props:true,
    beforeEnter: (to, from, next) => {
      let user= auth.currentUser;
      if(user){
        next();
      }else{
        next({name:'home'});
      }
    }
    
  },
  {
    path:"/profile",
    name:"profile",
    component:ProfilE,
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
