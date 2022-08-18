import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Input from '@/components/Input'
import Welcome from '@/components/Welcome'
import Users from '@/components/Users'
import User from '@/components/User'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welocom',
      component: Welcome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      children: [
        {
          path: 'input',
          component: Input
        },
        {
          path: 'hello',
          component: HelloWorld
        }
      ]
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
      children: [
        {
          path: 'user/:userId',
          component: User
        }
      ]
    }
  ]
})
