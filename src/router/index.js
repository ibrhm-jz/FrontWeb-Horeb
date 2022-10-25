import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);


import Inicio from '../components/Inicio.vue';
import Login from '../components/Login.vue';
import Empleados from '../components/Empleados.vue';
import Empresa from '../components/Empresa.vue';
import Productos from '../components/Productos.vue';
import Cotizacion from '../components/Cotizacion.vue';
import Clientes from '../components/Clientes.vue';
import Inventario from '../components/Inventario.vue';
import EditCotizacion from '../components/EditCotizacion.vue';
export default new Router({
    mode: 'history',
    routes: [{
            path: '/Inicio',
            name: 'Inicio',
            component: Inicio

        },
        {
            path: '/',
            name: '/',
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
            component: EditCotizacion

        },
        {
            path: '/clientes',
            name: '/clientes',
            component: Clientes
        },

        {
            path: '/editCotizacion',
            name: '/editCotizacion',
            component: Cotizacion

        },
        {
            path: '/inventario',
            name: '/inventario',
            component: Inventario,
            meta: { title: 'Skills - MyApp' } // <- I would to use this on

        },



    ]

});