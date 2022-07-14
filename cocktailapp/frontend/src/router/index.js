import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import UserAccount from '../components/UserAccount.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: SignIn
  },
  {
    path: '/account',
    name: 'Account',
    component: UserAccount
  },
  {
    path: '/signout',
    name: 'Sign Out',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router