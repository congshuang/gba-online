import 'babel-polyfill'
import Vue from "vue";
import app from "./app.vue";
import router from "./router";
import store from "./store";
import axios from "./common/axios";
import VueAxios from 'vue-axios'
import $ from 'jquery'
import 'animate.css'
import filters from "./filters";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "font-awesome/css/font-awesome.css";
import Distpicker from 'v-distpicker'
import ImpPanel from "./components/panel.vue";
Vue.component('v-distpicker', Distpicker);
Vue.component(ImpPanel.name, ImpPanel);

Vue.prototype.$axios = axios;
Vue.axios = axios;
Vue.http = axios;
Vue.use(VueAxios, axios);
window.$ = $;

Vue.use(ElementUI);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  store,
  router,
  el: "#app",
  render: h => h(app)
})
