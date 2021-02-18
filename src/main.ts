import { createApp } from 'vue';
import App           from './App.vue';
import router        from './router';
import 'ant-design-vue/dist/antd.css';

const antd = require('ant-design-vue');
const app = createApp(App);
app.use(router);
app.use(antd);
app.mount('#app');
