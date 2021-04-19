import {login} from '@/api'
import {
  saveToken,
  saveUserInfo,
  removeToken,
  removeUserInfo,
  loadToken,
  loadUserInfo
} from '@/utils/cache'
const state = {
  token: loadToken(), // token
  userInfo: loadUserInfo() // 用户登录信息
}

const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  // 登录相关，获取token和用户信息，用户根据自己的需求对接后台
  login({commit}, data) {
    return new Promise((resolve, reject) => {
      login(data)
        .then(res => {
          const {token,...userInfo}=res;
          // 存用户信息，token
          commit('SET_USERINFO', saveUserInfo(userInfo))
          commit('SET_TOKEN', saveToken(token))
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 登出
  fedLogOut() {
    // 删除token，用户信息，登陆状态
    removeToken()
    removeUserInfo()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
