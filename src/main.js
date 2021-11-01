import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LoadScript from 'vue-plugin-load-script'
import vuetify from './plugins/vuetify'
import './plugins'
import appData from './mixins/app-data'
Vue.use(LoadScript)
Vue.mixin(appData)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
