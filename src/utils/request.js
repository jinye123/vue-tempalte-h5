import axios from 'axios'
import store from '@/store'
import {
  Toast
} from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // 跨域发送cookie
  timeout: 50000,
  responseType: 'json'
})
// 请求拦截
service.interceptors.request.use(config => {
    // 不传递默认开启loading
    if (!config.hideLoading) {
      // loading
      Toast.loading({
        forbidClick: true
      })
    }
    if (store.getters.token) {
      config.headers['token'] = store.getters.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(response => {
    Toast.clear()
    if (response.status >= 200 && response.status < 300) {
      const {code, data, message} = response.data
      if (code === 1) {
        return data
      } else if(code === -1){
        Toast('您的登录已过期,请重新登录')
        store.dispatch('user/fedLogOut').then(() => {
          location.reload()
        })
      }else {
        Toast(message || 'Error')
        return Promise.reject(message || 'Error')
      }
    }
  },
  error => {
    Toast(error.message)
    return Promise.reject(error)
  }
)
// 请求方式
export default {
  post(url, data,hideLoading=false) {
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url,
        data: data,
        hideLoading:hideLoading
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  patch(url, data,hideLoading=false) {
    return new Promise((resolve, reject) => {
      service({
        method: 'patch',
        url,
        data: data,
        hideLoading:hideLoading
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  get(url, params,hideLoading=false) {
    return new Promise((resolve, reject) => {
      service({
        method: 'get',
        url,
        params,
        hideLoading:hideLoading
      }).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      service({
        method: 'delete',
        url,
        params
      }).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
