import router from '@/router'
import store from '@/store'

const whiteList = ['/login', '/404']
router.beforeEach(async (to, from, next) => {

  // 在白名单，直接进入
  if (whiteList.indexOf(to.path) !== -1) {
    return next()
  }

  const {token} = store.getters;
  if (token) {
    next()
  } else {
    const {path} = from
    next(`/login?r=${decodeURIComponent(path)}`)
  }
})
