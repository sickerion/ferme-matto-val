import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import VueMeta from 'vue-meta';
//import VueAnalytics from 'vue-analytics';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueMeta);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

/*Vue.use(VueAnalytics, {
  id: '',
  router
}*/

new Vue({
  render: h => h(App),
}).$mount('#app')
