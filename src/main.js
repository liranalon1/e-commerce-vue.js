import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue';
import Products from './Products.vue';

import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({

});

Vue.component('HeaderNav', Header);
Vue.component('Products', Products);

new Vue({
  el: '#app',
  render: h => h(App)
})
