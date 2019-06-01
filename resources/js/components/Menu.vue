<template>
    <div>
       <!-- <ul class="menu">
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/contactos">Contactos</router-link></li>
            <li><router-link to="/about">Acerca de</router-link></li>
             <li> <p @click="$router.push('/sesion')">iniciar sesion</p></li> 
        </ul>-->
        <div class="menu">
            <div class="sub-menu">
                <div class="guvu-tit">
                    <p>guvu</p>
                </div>

                <div class="opciones">
                    <div class="op">
                        <p>home</p>
                    </div>
                    <div class="op">
                        <p>Contactos</p>
                    </div>
                     <div class="op">
                        <p>Acerca de</p>
                    </div>
                    <div class="op">
                        <p>Acerca de</p>
                    </div>
                    <div class="op">
                        <p>iniciar sesion</p>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 
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

} */
@font-face {
    font-family:"roboto";
    src: url('/fonts/Roboto-Regular.ttf');
}
@font-face {
    font-family:"AsapSemibold";
    src: url('/fonts/Asap-SemiBold.ttf');
}

.menu{
    font-family:"roboto";
    background-color: aqua;
    padding:15px;
}

.sub-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sub-menu .guvu-tit p{
    margin-bottom: 0px;
    font-size: 24px;
}
.sub-menu .opciones{
    display: flex;
    font-size: 18px;
  
    /* justify-content: space-between; */
}
.sub-menu .opciones .op{
    margin-right: 16px;
      display: flex;
   justify-content: center;
}
.sub-menu .opciones p{
    margin-bottom: 0px;
}
</style>
