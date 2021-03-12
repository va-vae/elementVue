import request from "@/utils/request";

export function login(data) {
  return request({
    url: 'auth/login',
    method: 'post',
    data
  })
}

/** 获取验证码图片*/
export function getCodeImg() {
  return request({
    url: 'auth/code',
    method: 'get'
  })
}
