import Vue from 'vue'
import VueRouter from 'vue-router'
// const Login = import('../views/login/index')
// import Login from '@/views/login/index'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  meta: { title: '登录' },
  component: (resolve) => require(['@/views/login/index'], resolve),
  hidden: false
}, {
  path: '/Layout',
  meta: { title: '首页' },
  component: resolve => require(['@/views/mySpace/index'], resolve)
},
  {
  path: '/',
  redirect: '/login'
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
