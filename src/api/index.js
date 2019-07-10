/**
 * Created by LiuTao on 2018/4/10.
 */
import axios from 'axios'
import Store from '@/utils/store'
import Vue from 'vue'
import 'muse-ui-message/dist/muse-ui-message.css'
import Message from 'muse-ui-message'
Vue.use(Message)
const request = axios.create({
  baseURL: '/apis',
  timeout: 10000,
  withCredentials: true
})
// 拦截请求, 在header中添加token, 用来校验登录状态
request.interceptors.request.use(function(request) {
  request.headers = {
    ...request.headers,
    Authentication:
      (Store.get('__USER_INFO__') && Store.get('__USER_INFO__').token) || ''
  }
  return request
})

// 拦截响应, 未登录直接重定向去登录
request.interceptors.response.use(function(response) {
  if (response.status === '401') {
    Message.alert('您已离线，请先登录', '提示').then(res => {
      if (res.result) {
        window.location.href = '/login.html'
      }
    })
  } else {
    return response
  }
})
export const login = params => request.post('/user/login', params)
export const register = params => request.post('/user/register', params)
