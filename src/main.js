import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import LoadScript from 'vue-plugin-load-script'
import vuetify from './plugins/vuetify'
import './plugins'
import appData from './mixins/app-data'
Vue.use(VueAnalytics, {
  id: 'G-HLP3TR31KJ',
  router,
})
Vue.use(LoadScript)
Vue.mixin(appData)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
