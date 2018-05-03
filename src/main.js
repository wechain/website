import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import StoryblokVue from 'storyblok-vue'
import VueMoment from 'vue-moment'
import VueCalendar from 'vue-simple-calendar'
import VueAnalytics from 'vue-ua'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(StoryblokVue);
Vue.use(VueMoment);
Vue.use(VueCalendar);
Vue.use(VueAnalytics, {
  appName: 'Vue Vixens',
  appVersion: '1.0',
  trackingId: 'UA-65309624-3',
  vueRouter: router
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
