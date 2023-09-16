// Definimos los detalles de las rutas de nuestra aplicación

// importamos los componentes que vamos a usar en las rutas

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Chat from '../pages/Chat.vue';
import Register from '../pages/Register.vue';
import Login from '../pages/Login.vue';
import { createRouter, createWebHashHistory } from 'vue-router'; // Importamos el router de Vue


// Primero definimos la lista de rutas

const routes = [
    {path: '/',                      component: Home},
    {path: '/quienes-somos',         component: About},
    {path: '/chat',                  component: Chat},
    {path: '/iniciar-sesion',        component: Login},
    {path: '/registro',              component: Register},
];


// Creamos el router, pasándole las rutas y el administrador de historia de navegación

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router; // Exportamos el router para que lo podamos usar en main.js
