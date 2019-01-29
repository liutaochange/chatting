import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/home',
      component: () => import('@/components/index'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/components/home')
        },
        {
          path: '/mine',
          name: 'mine',
          component: () => import('@/components/mine')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/register')
    }
  ]
})
