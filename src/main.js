import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from "axios";

Vue.config.productionTip = false
console.log(process.env.VUE_BASE_URL);
axios.defaults.baseURL = process.env.VUE_BASE_URL;
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
