import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import filmRouter from './routers/films';
import cinemasRouter from './routers/cinemas';
import centerRouter from './routers/center'

const routes = [
  {
    path: '/',
    redirect:'/films/nowPlaying'
  },
  // 导出的是个数组，要展开
  // 其他都是对象
  ...filmRouter,
  cinemasRouter,
  centerRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
