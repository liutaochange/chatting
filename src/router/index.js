import Vue from 'vue';
import Router from 'vue-router';
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
import Store from '@/utils/store';
Vue.use(Router);
Vue.use(Message);

const router = new Router({
  base: process.env.NODE_ENV === 'production' ? '/chatting/' : '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index.html',
      component: () => import('@/pages/index'),
      children: [
        {
          path: '/index.html',
          name: 'home',
          component: () => import('@/pages/home'),
        },
        {
          path: '/mine.html',
          name: 'mine',
          component: () => import('@/pages/mine'),
        },
      ],
    },
    {
      path: '/login.html',
      name: 'login',
      component: () => import('@/pages/login'),
    },
    {
      path: '/register.html',
      name: 'register',
      component: () => import('@/pages/register'),
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.name === 'mine') {
    if (Store.get('__USER_INFO__') && Store.get('__USER_INFO__').token !== '') {
      next();
    } else {
      Message.alert('请先登录', '提示').then(res => {
        if (res.result) {
          router.push('/login.html');
        }
      });
    }
  } else {
    next();
  }
});
export default router;
