import Vue from 'vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
window.convertir = require('numero-a-letras');
// Optionally install the BootstrapVue icon compZZonents plugin
Vue.use(IconsPlugin)
new Vue({
    vuetify,
    router: router,
    render: h => h(App),
}).$mount('#app')