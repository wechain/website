import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import StoryblokVue from 'storyblok-vue'
import "./registerServiceWorker";

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(StoryblokVue);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
