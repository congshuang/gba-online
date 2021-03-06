import Vue from "vue";
import Vuex from "vuex";
import types from "./mutation-types";
import * as api from "../api";
import { getCurrentMenu, getSessionKey } from '../common/utils'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'production', 直接修改state 抛出异常

  getters: {
    log:state => state.log,
  },
  state: {
    log:0,
  },
  mutations: {
    //只能同步的函数
    [types.SET_LOG] (state, log) {
      state.log = log
    }
  }, actions: {
    //异步的函数

  },
})

export default store
