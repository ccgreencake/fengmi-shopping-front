import Vue from 'vue'
import App from './App.vue'
import 'font-awesome/css/font-awesome.min.css'
import router from '@/router'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
