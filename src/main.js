import Vue from 'vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2);
window.convertir = require('numero-a-letras');
// Optionally install the BootstrapVue icon compZZonents plugin
Vue.use(IconsPlugin)
new Vue({
    vuetify,
    router: router,
    render: h => h(App),
}).$mount('#app')