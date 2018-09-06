/**
 * Created by LiuTao on 2018/4/10.
 */
import axios from 'axios'
import { baseUrl } from './config'
const request = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  withCredentials: true
})
// login 
export const login = (params) => {
  const url = '/login'
  return request.get(url, {
    params: params
  })
}