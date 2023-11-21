<script setup>
import ButtonTwo from '../components/ButtonTypeTwo.vue';
import Carrousel from '../components/Carrousel.vue';
</script>

<template>
  <!---->
  <section class="section hero">

    <div class="ContentHeroTitle">
      <h2 class="heroTitle">
        La mejor <strong>comida</strong><br><strong>china</strong> en México
      </h2>
      <ButtonTwo enlace="mesas" titulo="Reserva ahora"></ButtonTwo>
    </div>

    <div class="contentImg">
      <img src="../assets/img/fideos_hero.png" alt="Fideos chinos" class="imgHero">
    </div>
  </section>
  <!---->
  <section class="section comida">
    <div class="textSeccionComida">

      <h3 class="titleSeccion">Fideos</h3>
      <p>Amaras nuestros <strong>fideos</strong>.</p>
      <p> Elige tu favorito.</p>
    </div>
    <div class="platillos">

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Fideo1.png" alt="Fideos chinos con verduras y soja" loading="lazy">
        </div>
        <span class="nombrePlatillo"> Fideos chinos <br>con verduras y soja</span>
      </div>

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Fideo2.png" alt="Fideos chinos con camarones" loading="lazy">
        </div>
        <span class="nombrePlatillo">Fideos chinos <br> con camarones</span>
      </div>

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Fideo3.png" alt="Fideos chinos con langostinos y mango" loading="lazy">
        </div>
        <span class="nombrePlatillo">Fideos chinos con <br>langostinos y mango</span>
      </div>
    </div>
  </section>
  <!---->
  <section class="section comida">
    <div class="textSeccionComida">
      <h3 class="titleSeccion">Pollo</h3>
      <p>Lo mejor del <strong>pollo</strong>.</p>
    </div>
    <div class="platillos">
      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Pollo1.png" alt="Pollo mandarina a la plancha" loading="lazy">
        </div>
        <span class="nombrePlatillo"> Pollo mandarina<br> a la plancha</span>
      </div>

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Fideo2.png" alt=" Pollo naranja" loading="lazy">
        </div>
        <span class="nombrePlatillo"> Pollo naranja</span>
      </div>

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Fideo3.png" alt="Pollo con patata" class="imgplatillo"
            loading="lazy">
        </div>
        <span class="nombrePlatillo"> Pollo con patata</span>
      </div>
    </div>
  </section>
  <!---->
  <section class="section comida">
    <div class="textSeccionComida">
      <h3 class="titleSeccion">Postres</h3>
      <p><strong>Endulza</strong> esta vida.</p>
    </div>
    <div class="platillos">
      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Postre1.png" alt="Pollo mandarina a la plancha" loading="lazy">
        </div>
        <span class="nombrePlatillo"> Dulce de Durazno</span>
      </div>

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Postre2.png" alt="Fideos chinos con camarones" loading="lazy">
        </div>
        <span class="nombrePlatillo">Pastel de Luna</span>
      </div>

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Postre3.png" alt="Fideos chinos con langostinos y mango" class="imgplatillo"
            loading="lazy">
        </div>
        <span class="nombrePlatillo">Jiān Duī</span>
      </div>
    </div>
    <!--Boton-->
    <div class="contentBoton">
      <ButtonTwo enlace="menu" titulo="Ir a Menú"></ButtonTwo>
    </div>
  </section>
  <!---->
  <div class="separacion"><div class="overlay"></div></div>
  <!---->
  <section class="section contentHistoria">
    <div class="contentHist">
      <div class="contentImg">
        <img src="../assets/img/CuadroTia.png" alt="Mei Ling" class="imgTia">
      </div>
      <div class="contentText">
        <h3 class="titleSeccion">Nuestra historia</h3>
        <p>Hecho con mucho <strong>amor</strong><br>para nuestros clientes.</p>
        <div>
          <ButtonTwo enlace="NuestraHistoria" titulo="Conocer"></ButtonTwo>
        </div>
      </div>
    </div>

    <div class="imgBackHistoria"></div>

  </section>
  <!---->
  <section class="section">
    <div>
      <h3 class="titleSeccion">Nuestros clientes</h3>
    </div>
    <div class="contentClientes">
      <di class="comentarios">
      </di>
      <div class="contentImgComentarios"> 
        <img src="../assets/img/imgClientes.png" alt="Clientes" class="imgClientes">
      </div>
    </div>
  </section>
</template>

<style scoped>

.hero {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(223, 222, 222);
  border-radius: 30px;
  margin-top:20px;
  padding:30px;
}

.ContentHeroTitle {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  gap: 20px;
}

.heroTitle {
  font-size: 5rem;
  font-weight: bold;
}

.titleSeccion {
  font-size: 4.0625rem;
  font-weight: 580;
}


.platillos {
  margin: 2.5rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  align-items: center;
}

.platillo {
  min-width: 20%;
}

.separacion {
  position: relative;
  background-image: url('../assets/img/imgSeccion.webp');
  background-size: cover;
  background-position: bottom;
  width: 100%;
  min-height: 400px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-radius: 10px;
}
.overlay {
  border-radius: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.contentBoton {
  padding-top: 1.875rem;
  display: flex;
  justify-content: center;
}

.textSeccionComida>p {
  font-weight: 600;
  font-size: 1.125rem;
}

.contentHistoria {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
}

.imgBackHistoria {
  background-image: url('../assets/img/historiaBack.jpeg');
  background-size: cover;
  background-position: bottom;
  width: 100%;
  min-height: 400px;
  box-sizing: border-box;
  grid-column: 1/-1;
  grid-row: 1/-1;
  z-index: 0;
  border-radius: 30px;
}

.contentHist {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  grid-column: 1/-1;
  grid-row: 1/-1;
  z-index: 2;
}

.contentText {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-content: center;
  gap: 1.875rem;
}

.contentClientes{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
}

.imgClientes,.imgTia{
  width: 80%;
}

.nombrePlatillo{
  text-wrap:balance;
}
</style>