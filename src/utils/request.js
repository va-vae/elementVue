import axios from "axios";

const request = axios.create({
  baseURL: "http://47.106.65.217:8010",
  timeout: 5000
})
/** 请求拦截*/
request.interceptors.request.use(config => {
  console.log(config, 'config')
  return config
}, error => {
  Promise.reject(error)
})

request.interceptors.response.use(res => {
  console.log(res, 'res');
  return res.data
}, error => {
  console.log(error)
})

export default request
