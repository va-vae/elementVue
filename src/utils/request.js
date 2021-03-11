import axios from "axios";

const request = axios.create({
  baseURL: "http://47.106.65.217:8010",
  timeout: 5000
})

export default request
