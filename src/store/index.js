import { createStore } from 'vuex'
import {constantRouterMap} from '../router/index'
export default createStore({
  state: {
    routes: constantRouterMap, // 静态路由 router index.js
    addRoutes: [] // 动态匹配的路由
  },
  mutations: {
  },
  actions: {

  },
  modules: {
  }
})
