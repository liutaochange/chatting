import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index.html'
    },
    {
      path: '/index.html',
      name: 'index',
      redirect: '/home.html',
      component: () => import('@/pages/index'),
      children: [
        {
          path: '/home.html',
          name: 'home',
          component: () => import('@/pages/home')
        },
        {
          path: '/mine.html',
          name: 'mine',
          component: () => import('@/pages/mine')
        }
      ]
    },
    {
      path: '/login.html',
      name: 'login',
      component: () => import('@/pages/login')
    },
    {
      path: '/register.html',
      name: 'register',
      component: () => import('@/pages/register')
    }
  ]
})
