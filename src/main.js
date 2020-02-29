import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import gsap from 'gsap';

import ProfileLayout from './components/layout/ProfileLayout';
import SocialItems from './components/layout/SocialItems';
import Navbar from './components/layout/navbar'
import ScrollIndicator from './components/layout/ScrollIndicator';

Vue.component("profile-layout", ProfileLayout);
Vue.component("social-items", SocialItems);
Vue.component('scroll-indicator', ScrollIndicator);
Vue.component('navbar', Navbar);

Vue.use(gsap)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
