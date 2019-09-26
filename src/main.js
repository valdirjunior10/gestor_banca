import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import VueGoogleCharts from 'vue-google-charts';
import VueResource from 'vue-resource';

import { routes } from '../src/Routes';
const router = new VueRouter({
  routes
})

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueGoogleCharts)
Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
