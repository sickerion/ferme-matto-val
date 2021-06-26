import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import VueMeta from 'vue-meta';
import VueAnalytics from 'vue-analytics';
import VueFbCustomerChat from 'vue-fb-customer-chat';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueMeta);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'G-DRK1GBJQRW'
})

Vue.use(VueFbCustomerChat, {
  page_id: 112495743738283,
  theme_color: '#333333',
  locale: 'fr_CA',
})

new Vue({
  render: h => h(App),
}).$mount('#app')
