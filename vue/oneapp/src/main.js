import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueAxiosPluginx from "vue-axios-plugin"

Vue.use(vueAxiosPluginx(
{
  reqHandleFunc: config => config,
  reqErrorFunc: error => Promise.reject(error),
  // 响应拦截处理
  resHandleFunc: response => response,
  resErrorFunc: error => Promise.reject(error)
}
))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
