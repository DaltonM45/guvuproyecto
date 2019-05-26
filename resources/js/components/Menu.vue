<template>
    <div>
        <ul class="menu">
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/contactos">Contactos</router-link></li>
            <li><router-link to="/about">Acerca de</router-link></li>
            <!-- <li> <p @click="$router.push('/sesion')">iniciar sesion</p></li> -->
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.menu{
    list-style: none;
    padding: 0;
    background: #09232738;
    width: 100%;
}

.menu li  {
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 20px;
}

.menu li:hover{
    background: #ef8354;
}

.menu li{
 display: inline-block;
 text-align: center;
}

</style>
