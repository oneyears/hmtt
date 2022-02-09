import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 导入flexible
import 'amfe-flexible'

// 导入自己写的全局样式
import './style/base.less'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')