import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ProfileLayout from './components/layout/ProfileLayout';

Vue.component("profile-layout", ProfileLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
