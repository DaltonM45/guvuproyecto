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
                <div class="head-min">
                    <div class="guvu-tit">
                        <p>i'm fast</p>
                    </div>
                    <div class="toggle-menu">
                       <i class="fas fa-bars barra" v-on:click="abrirMenu()"></i>
                    </div>
                </div>
                <!-- <div class="opciones" v-bind:class="{showmenu: permiso}"> -->
                <div class="opciones" id="cell-menu">
                    <div class="op">
                        <p>inicio</p>
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
                <!-- <div class="opciones2" v-show="permiso">
                    <div class="op">
                        <p>inicio</p>
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
                </div> -->
                
                
            </div>
        </div>



    </div>
</template>

<script>
export default {
    data(){
        return{
            permiso:false
        }
    },
    methods:{
        abrirMenu(){
            this.permiso =  !this.permiso;
            console.log(this.permiso)

            document.getElementById('cell-menu').style.display = 'block';

            if(this.permiso == false){
             document.getElementById('cell-menu').style.display = 'none';
            }
        }
    }

}
</script>

<style scoped>

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
    background-color: #fff;
    /* box-shadow: 0 2px 5px rbga(0,0,0, .2); */
       box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
    padding:15px;
    /* margin: auto;
    margin-top: 20px;
    max-width: 1200px; */
    border-radius: 6px;
     position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
}

.sub-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.showmenu{
     background: #fa0000; 
     display: flex; 
    flex-direction: column;   
    /* display: none; */
}
 
.sub-menu .toggle-menu{
    display: none;
}

 .sub-menu .head-min .toggle-menu .barra{
        font-size: 22px;  
  }
.sub-menu .guvu-tit p{
     font-family:"AsapSemibold";
    margin-bottom: 0px;
    font-size: 24px;
    margin-left: 12px;
    /* line-height: 60px; */
}
.sub-menu .opciones{
    display: flex;
    font-size: 14px;
    /* justify-content: space-between; */
}
/* OPCIONES 2 */
/* .sub-menu .opciones2{ display: none;} */
.sub-menu .opciones2 .op{
    margin-right: 10px;
    margin-left: 10px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    cursor: pointer;
}
.sub-menu .opciones2 .op:hover{
    background: #069370;
    color: #fff;
    transition: 0.5s;
}
.sub-menu .opciones2 p{
    margin-bottom: 0px;
}

.sub-menu .opciones .op{
    margin-right: 10px;
    margin-left: 10px;
    padding: 10px 20px;
    display: flex;
    cursor: pointer;
    /* justify-content: center; */
}
.sub-menu .opciones .op:hover{
    background: #069370;
    color: #fff;
    transition: 0.5s;
}
.sub-menu .opciones p{
    margin-bottom: 0px;
}

/* RESPONSIVE */

@media screen and (max-width: 870px){

    .sub-menu{
        display: block;
    }
    .sub-menu .head-min {
       display: flex;
       align-items: center;
       justify-content: space-between;
     }
    .sub-menu .head-min .toggle-menu{
        display: block;
        cursor: pointer;
     }
    .sub-menu .opciones{
         display: flex;
         /* align-items: center; */
        flex-direction: column;
        /* display: none; */
    }
    .sub-menu .opciones .op{
        width: 100%;
       
    }
 
     .sub-menu .opciones {
         display: none;
    }

}
/* 
@media screen and (min-width: 871px){
  .sub-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

   .sub-menu .opciones {
          display: flex;
    font-size: 14px;
    }
} */

</style>
