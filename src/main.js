import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from "axios";
import VueGeolocation from 'vue-browser-geolocation';
import moment from 'moment'
import vueCountryRegionSelect from 'vue-country-region-select'

Vue.use(VueGeolocation);
Vue.use(vueCountryRegionSelect);
Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD-MMMM-YYYY HH:MM A')
  }
});
console.log(process.env.VUE_BASE_URL);
axios.defaults.baseURL = process.env.VUE_BASE_URL;
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
