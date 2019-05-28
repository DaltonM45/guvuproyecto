import router from './routes'




window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('contactos-component', require('./components/Contactos.vue').default);
Vue.component('about-component', require('./components/About.vue').default);
Vue.component('error404-component', require('./components/Error404.vue').default);
Vue.component('home-component', require('./components/Home.vue').default);
Vue.component('login-component', require('./components/Login.vue').default);
Vue.component('menu-component', require('./components/Menu.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);

const app = new Vue({
    el: '#app' ,
    router
});
