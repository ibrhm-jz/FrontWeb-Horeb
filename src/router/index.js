import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);


import IndexView from '../components/Inicio.vue';
import Login from '../components/Login.vue';
import Empleados from '../components/Empleados.vue';
import Empresa from '../components/Empresa.vue';
import Productos from '../components/Productos.vue';
import Cotizacion from '../components/Cotizacion.vue';
import Clientes from '../components/Clientes.vue';
import Hello from '../components/Hello.vue';

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
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
        {
            path: '/productos',
            name: '/productos',
            component: Productos

        },
        {
            path: '/cotizacion',
            name: '/cotizacion',
            component: Cotizacion

        },
        {
            path: '/hello',
            name: '/hello',
            component: Hello

        },
        {
            path: '/clientes',
            name: '/clientes',
            component: Clientes

        },


    ]

});