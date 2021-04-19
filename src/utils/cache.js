import cookies from 'js-cookie'
import storage from 'good-storage'
const TokenKey = 'Access-Token' // token
const UserInfoKey = 'User-Info' // 用户信息 {} {...}
const MessageHistoryTime='Message-History-Time'

// 获取token
export function loadToken() {
  return storage.get(TokenKey, '')
}
// 保存token
export function saveToken(token) {
  storage.set(TokenKey, token)
  return token
}
// 删除token
export function removeToken() {
  storage.remove(TokenKey)
  return ''
}
// 获取用户信息
export function loadUserInfo() {
  return storage.get(UserInfoKey, {})
}
// 保存用户信息
export function saveUserInfo(userInfo) {
  storage.set(UserInfoKey, userInfo)
  return userInfo
}
// 删除用户信息
export function removeUserInfo() {
  storage.remove(UserInfoKey)
  return {}
}

// 保存消息浏览时间
export function saveMessageHistoryTime(time) {
  storage.set(MessageHistoryTime, time)
}

// 保存消息浏览时间
export function getMessageHistoryTime(time) {
  return storage.get(MessageHistoryTime)
}
