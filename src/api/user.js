import http from '@/utils/request'

export function login(data) {
  return http.get(`/xxx/login`,data)
}

