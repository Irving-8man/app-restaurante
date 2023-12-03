<template>
    <section class="container">
      <div class="menu-sidebar">
        <div class="circle-container">
          <div class="circle">IC</div>
          <div class="name">Irving Geyler Cupul</div>
        </div>
        <div class="menu">
          <div class="menu-title">Mi cuenta</div>
          <ul>
            <li :class="{ 'active': $route.path === '/userperfil' }">
              <router-link to="/user/userperfil" style="color: black; ">Perfil</router-link>
            </li>
            <li :class="{ 'active': $route.path === '/usermesasreserva' }">
              <router-link to="/user/usermesasreserva" style="color: rgb(0, 0, 0); font-weight: bold;">Mesas</router-link>
            </li>
            <li :class="{ 'active': $route.path === '/userpedidosproceso' }">
              <router-link to="/user/userpedidosproceso" style="color: black;">Pedidos</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="Mesas">
        <div class="rectangulo">
          <div class="Reserva">
            <ul>
              <li :class="{ 'active': $route.path === '/user/usermesasreserva' }">
                <router-link to="/user/usermesasreserva" style="color: black; font-weight: bold;">Mi Reserva</router-link>
              </li>
            </ul>
          </div>
          <div class="Completado">
            <ul>
              <li :class="{ 'active': $route.path === '/user/usermesascompletado' }">
                <router-link to="/user/usermesascompletado" style="color: black; ">Completado</router-link>
              </li>
            </ul>
          </div>
          <div class="Cancelado">
            <ul>
              <li :class="{ 'active': $route.path === '/user/usermesascancelado' }">
                <router-link to="/user/usermesascancelado" style="color: black; ">Cancelado</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="rectanguloMesas">
          <br><p >Mesa 1</p>
          <p>Fecha: </p>
          <p>Hora de entrada:</p>
          <p>Personas</p><br>
        </div>
      </div>
    </section>
    
  </template>
  
  <style scoped>
  .container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(1, minmax(50px, 1fr));
  }
  
  .Mesas{
    grid-column: span 2;
  }
  .Mesas p{
    margin-left: 15px;
  }
  .separacion{
    margin-top: 100px;
  }
  .rectangulo{
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      margin-top: 50px;
      width: 650px;
      margin-left: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(1, minmax(50px, 1fr));
  }
  .rectangulo li {
    text-align: center; 
  }
  .rectanguloMesas{
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      margin-top: 25px;
      height: auto;
      width: 650px;
      margin-left: 30px;
  }
  .menu-sidebar {
  
    height: 100vh;
    width: 350px;
    background-color: rgb(255, 255, 255);
    justify-content: flex-start; 
    align-items: flex-start; 
    margin-top: 10px;
    color: black;
  }
  
  .circle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgb(255, 255, 255);
  
  }
  
  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 40px;
  }
  
  .name {
    margin-top: 10px;
    font-size: 20px;
  }
  
  .menu {
    padding: 20px;
  }
  
  .menu-title {
    font-weight: bold;
    color: rgb(0, 0, 0);
    font-size: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
  }
  
  li {
    font-weight: normal;
    margin-left: 10px;
    font-size: 20px;
    color: black; /* Cambiar el color a negro */
  }
  
  li.active {
    font-weight: bold;
    color: rgb(0, 0, 0);
  }
  </style>
  