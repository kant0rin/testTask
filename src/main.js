import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import dataBus from "@/plugins/dataBus";
import SDK from '@/plugins/SDK'

Vue.config.productionTip = false

Vue.use(dataBus)
Vue.use(SDK)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
