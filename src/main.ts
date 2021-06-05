/*
 * @LastEditors: wyswill
 * @Description: 
 * @Date: 2021-06-05 15:15:45
 * @LastEditTime: 2021-06-05 15:25:20
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/rem'
import 'node_modules/normalizecss/normalize.css'
createApp(App).use(store).use(router).mount('#app')
