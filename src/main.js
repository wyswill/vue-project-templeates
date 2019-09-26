import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog' // error log
import './permission' // permission control
import './mock' // simulation data
import * as filters from './filters' // global filters
import axios from "axios";
import tinymce from "./components/Tinymce";
import router from './router'

Vue.prototype.$http = axios;
Vue.prototype.$server = "";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

Vue.use(Element);
Vue.component("tinymce", tinymce);
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
