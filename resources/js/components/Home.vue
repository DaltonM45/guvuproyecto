<template>
<div id="principal">
    <menu-component> </menu-component>


<!-- Inicio del carrousel  -->
  
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src= "img/Carrousel1.png" class="d-block"
        alt="First slide">
    </div>
    <div id="carouselExampleFade2" class="carousel-item">
      <img class="d-block" src="https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg"
        alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
        alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!-- Figot pulln del Carrousel  -->


<!-- SORTEOS ACTIVOS -->
<div class="center">
<H1><b> Sorteos activos</b>  &nbsp; &nbsp; &nbsp;  <b>Quedan:</b> 1d 2h 34min 56s </H1>  

<div class="img1"  style="">
  <img src="img/Lonuevo.png" alt="imagen" width="220" height="270.250">
</div> 

<div class="card">
  <img id="sorteos" src="img/iphone.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>Mas Información</b></h4> 
    <p>$150</p> 
  </div>
   <button type="button" class="btn btn-primary">Participar</button>
</div>


<div class="card">
  <img id="sorteos" src="img/iphone.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>Mas Información</b></h4> 
    <p>$150</p> 
  </div>
   <button type="button" class="btn btn-primary">Participar</button>
</div>


<div class="card">
  <img id="sorteos" src="img/iphone.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>Mas Información</b></h4> 
    <p>$150</p> 
  </div>
   <button type="button" class="btn btn-primary">Participar</button>
</div>



<div class="card">
  <img id="sorteos" src="img/iphone.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>Mas Información</b></h4> 
    <p>$150</p> 
  </div>
   <button type="button" class="btn btn-primary">Participar</button>
</div>


</div>
<!-- /SORTEOS ACTIVOS -->


         <br>
       
        <br>
         <br>
          <br>
       
        <br>
         <br>
          <br>
       
        <br>
         <br>
          <br>
       
        <br>
         <br>
          <br>
       
        <br>
         <br>
          <br>
       
        <br>
         <br>
          <br>
       <!--  -->
        <br>
         <br>

          <br>
       
        <br>
         <br> <br>
       
        <br>
         <br>
          <br>
       
        <br>
         <br>
          <br>
       
        <br>
         <br>



    <footer-component> </footer-component>
</div>

</template>


<script>
export default {

}
</script>

<style scoped>

#principal{
  background-color: green;
  }

  #carouselExampleFade{

    margin-top: 50px;
  }

img.d-block {
  margin-top: 20px;
  height: 200px;
  width: 100%;
}

/* <!-- SORTEOS ACTIVOS --> */



div .center {
  background-color: white;
  text-align: center;
}

div .card{
margin-bottom: 20px; 
width: 13rem;
border: 2px solid rgb(12, 11, 11);
margin-left: 20px;
vertical-align: middle;
display: inline-block;
background:white;

}

.card-img-top{

  border: 2px solid rgb(11, 12, 11);  
  width: 11rem;
  margin: 25px;
}

.btn-primary{

  background:  green;
  border: 1px solid black;
  margin-bottom: 3px;

}

.img1{
 border: 2px dashed black;
  margin-left: 25px;
 float: left;
}
img{
  background: white;
}


/* <!-- /SORTEOS ACTIVOS --> */
</style>
