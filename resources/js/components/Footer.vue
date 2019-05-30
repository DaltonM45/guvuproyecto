<template>
<div>
    <div class="footer">
        <div class="sub-foot">
            <div class="panel-guvu">
                    <div>
                        <p class="gv">GUVU</p>
                    </div>
            </div>
            <div class="panel-redes">
                <div>
                    <p class="title">Lorem ipsum dolor sit amet.</p>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aspernatur ipsum repudiandae debitis facere nemo corrupti 
                        possimus quisquam vel alias minus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aspernatur ipsum repudiandae debitis facere nemo corrupti 
                        possimus quisquam vel alias minus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aspernatur ipsum repudiandae debitis fa</p>
                    </div>
                </div>
                <div class="panel-icons">
           
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
   /* background-color: #2D3047; */
   background-color: #1e2b38;
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
.panel-guvu {
    width: 40%;

}
.panel-guvu {
     display: flex;
     align-items: center;
     justify-content: center;
     font-size: 100px;
}
.panel-guvu .gv{
    
}

/* panel redes */

.panel-redes {
   width: 60%;
   padding-left: 18px;
   padding-right: 18px;
}
.panel-redes .title{
   font-size: 22px;
}

.panel-redes .panel-icons{
    margin-top: 26px;
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

.fa-facebook-square{
    /* color:#3B5998 ; */
}

.copyright{
    background-color: #283a4b;
    color: #fff;
    padding-top: 8px;
    padding-bottom: 8px;
}
.copyright p{
    margin: 0px;
}

</style>
