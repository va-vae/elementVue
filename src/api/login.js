import request from "@/utils/request";

export function login(data) {
  return request({
    url: 'api/user_login/Login',
    method: 'post',
    data
  })
}
