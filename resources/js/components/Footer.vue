<template>
<div>
    <div class="footer">
        <div class="sub-foot">
            <div class="panel-guvu">
                <div>
                    <p>guvu</p>
                </div>
            </div>
            <div class="panel-opciones">

            </div>
            <div class="panel-redes">
                <div>
                    <p>Redes sociales</p>
                </div>
                <div class="panel-icons">
                    <div>
                        <i class="fab fa-facebook-square"></i>
                    </div>
                    <div>
                        <i class="fab fa-instagram"></i>
                    </div>
                    <div>
                        <i class="fab fa-youtube"></i>
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
    font-family:"Ranga";
    src: url('/fonts/Ranga-Bold.ttf');
}
.footer{
   background-color: #2D3047;
   color: #fff;
   display: flex;
   justify-content: center;
   padding-top: 18px;
   padding-bottom: 32px;
}

.sub-foot{
    width: 90%;
    display: flex;
    justify-content: space-between;
}

.sub-foot .panel-guvu p {
    font-size: 48px;
}



/* panel redes */

.panel-redes {

}
.panel-redes p{
   font-size: 40px;
}

.panel-redes .panel-icons{
    display: flex;
    justify-content: space-around;
}


.panel-redes .panel-icons i {
    font-size: 34px;
    cursor: pointer;
}

.fa-facebook-square{
    /* color:#3B5998 ; */
}

.copyright{
    background-color: #222538;
    color: #fff;
    padding-top: 8px;
    padding-bottom: 8px;
}
.copyright p{
    margin: 0px;
}

</style>
