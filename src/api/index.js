/**
 * Created by LiuTao on 2018/4/10.
 */
import axios from 'axios'
const request = axios.create({
  timeout: 10000,
  withCredentials: true
})
export const login = params => request.post('/user/login', params)
export const register = params => request.post('/user/register', params)
