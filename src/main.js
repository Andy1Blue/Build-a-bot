import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';
import pinDirecitve from './shared/pin-directive';
import currencyFilter from './shared/currency-filter';

Vue.config.productionTip = false;
// Share globally for all components
Vue.directive('pin', pinDirecitve);
// Share globally for all components
Vue.filter('currency', currencyFilter);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
