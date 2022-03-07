import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import modal from "vue-js-modal";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.config.productionTip = false;
Vue.use(modal, { dialog: true, dynamic: true });

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
