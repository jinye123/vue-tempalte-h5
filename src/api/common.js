import http from "@/utils/request";

// 获取短信验证码
export function getCode(phone) {
  return http.get(`/aliyun/send/${phone}`)
}
