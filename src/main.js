import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BCarousel } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)
Vue.use(VueSweetalert2);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('b-carousel', BCarousel)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
