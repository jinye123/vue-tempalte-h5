/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/* 手机号*/
export function mobile(str) {
  const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  return reg.test(str)
}

/* 身份证号*/
export function idCard(str) {
  const reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(str)
}
/* 数字 */
export function number(str) {
  const reg = /^\d{4}$/
  return reg.test(str)
}
