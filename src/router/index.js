import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);


import IndexView from '../components/Inicio.vue';
import Login from '../components/Login.vue';
import Empleados from '../components/Empleados.vue';
import Empresa from '../components/Empresa.vue';

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: '/',
            component: IndexView

        },
        {
            path: '/login',
            name: '/login',
            component: Login

        },
        {
            path: '/empleados',
            name: '/empleados',
            component: Empleados

        },
        {
            path: '/empresa',
            name: '/empresa',
            component: Empresa

        },


    ]

});