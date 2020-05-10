import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRx from "vue-rx";
import { akitaDevtools } from "@datorama/akita";

Vue.config.productionTip = false;
Vue.use(VueRx);

akitaDevtools();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
