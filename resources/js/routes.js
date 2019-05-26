import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//Componentes
import Home from './components/Home'
import Contactos from './components/Contactos'
import About from './components/About'
import Error404 from './components/Error404'
import Login from './components/Login'





export default new VueRouter({

    routes : [

        {
            path: '/',
            name: '/',
            component : Home
        },
        {
            path: '/contactos',
            name: 'contactos',
            component : Contactos
        },

        {
            path: '/about',
            name: 'about',
            component : About
        },

        {
            path: '/login',
            name: 'login',
            component : Login
        },

        {
            path: '*',
            component : Error404
        },
        
        
     
    ],
      mode: 'history'
})
