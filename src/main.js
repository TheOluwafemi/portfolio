import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ProfileLayout from './components/layout/ProfileLayout';
import Socials from './components/layout/socials';
import Navbar from './components/layout/navbar'

Vue.component("profile-layout", ProfileLayout);
Vue.component("socials", Socials);
Vue.component('navbar', Navbar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
