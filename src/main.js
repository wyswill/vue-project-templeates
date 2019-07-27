import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import element from "element";
Vue.use(element);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
