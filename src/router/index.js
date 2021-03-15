import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

const Layout = resolve => require(['@/views/mySpace/index'], resolve)

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  meta: { title: '登录' },
  component: (resolve) => require(['@/views/login/index'], resolve),
  hidden: true
}, {
  path: '/Layout',
  meta: { title: '首页' },
  component: Layout
},
  {
    path: '/myInfo',
    component: Layout,
    meta: { title: '我的空间站'},
    children: [{
      path: 'artical',
      component: (resolve) => require(['@/views/myInfo/artical'], resolve),
      hidden: false,
      meta: { title: '我的文章' },
      name: 'artical'
    },{
      path: 'photo',
      component: (resolve) => require(['@/views/myInfo/photo'], resolve),
      meta: { title: '我的相册' },
      name: 'photo'
    }]
  },
  {
    path: '/',
    redirect: '/Layout',
    hidden: true
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || Cookies.get('token')) {
    next()
  } else {
    next('/login')
  }
})

export default router
