<template>
<div>
    <div class="footer">
        <div class="sub-foot">
            <div class="panel-guvu">
                    <div>
                       <h3>Conocenos</h3>
                    </div>
                    <div>
                        <a href="#">Lorem, ipsum dolor sit amet</a>
                    </div>
                    <div>
                        <a href="#">Lorem, ipsum dolor sit amet</a>
                    </div>
                    <div>
                        <a href="#">Lorem, ipsum dolor sit amet</a>
                    </div>
                    <div>
                        <a href="#">Lorem, ipsum dolor sit amet</a>
                    </div>
            </div>
            <div class="panel-medio">
                    <div>
                       <h3>Informacion</h3>
                    </div>
                    <div>
                        <a href="#">Lorem, ipsum dolor sit amet</a>
                    </div>
                    <div>
                        <a href="#">Lorem, ipsum dolor sit amet</a>
                    </div>
                    <div>
                        <a href="#">Lorem, ipsum dolor sit amet</a>
                    </div>
                    <div>
                        <a href="#">Lorem, ipsum dolor sit amet</a>
                    </div>
            </div>
            <div class="panel-redes">
                <div class="panel-icons">
                        <div class="title">
                            <h3 class="d-flex justify-content-center">Comunidad</h3>
                        </div>
                        <div class="sub-panel-icons">
                            <div>
                                <a href="#" class="facebook"><i class="fab fa-facebook-square"></i></a>
                            </div>
                            <div>
                                <a href="#" class="instagram">  <i class="fab fa-instagram"></i></a>
                            
                            </div>
                            <div>
                                <a href="#" class="youtube"><i class="fab fa-youtube"></i></a>
                            </div> 
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright d-flex justify-content-center">
            <p>2018 copyright</p>
    </div>
</div>
</template>

<script>
export default {

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
.footer{
   /* background-color: #2D3047; */
   background-color: #000000;
   color: #fff;
   display: flex;
   justify-content: center;
   padding-top: 30px;
   padding-bottom: 32px;
   font-family: "AsapSemibold";
}
.sub-foot{
    width: 90%;
    display: flex;
    justify-content: space-around;
}
/* PANEL GUVU */
.sub-foot .panel-guvu a{
      font-family: "roboto";
      text-decoration: none;
      color: #ccc;
}
.sub-foot .panel-guvu a:hover{
      color: #fff;
}
/* PANEL MEDIO */
.panel-medio a{
    font-family: "roboto";
    text-decoration: none;
     color: #ccc;
}
.panel-medio a:hover{
    color: #fff;
}
/* PANEL REDES */
.panel-redes {
   /* width: 60%; */
   padding-left: 18px;
   padding-right: 18px;
}
.panel-redes .panel-icons .title{
    margin-bottom: 20px;
}
.panel-redes .panel-icons .sub-panel-icons{
      display: flex;
      justify-content: center;
}
.panel-redes .panel-icons a {
    color: #fff;
    width: 80px;
    padding: 8px 0;
    border-radius: 3px;
    font-size: 38px;
    margin: 0 20px;
    text-align: center;
    display: block;
    background: #17202a;
}

.panel-redes .panel-icons .facebook:hover {
    background: #3b5998;
}
.panel-redes .panel-icons .instagram:hover {
     background: #3f729b;
}
.panel-redes .panel-icons .youtube:hover {
    background: #cd201f;
}
/* Panel COPYRIGH */
.copyright{
    background-color: #000000;
    color: #fff;
    padding-top: 8px;
    padding-bottom: 8px;
    font-family: "roboto";
}
.copyright p{
    margin: 0px;
}

</style>
