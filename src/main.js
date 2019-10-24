import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts);

new Vue({
  render: h => h(App),
}).$mount('#app')
