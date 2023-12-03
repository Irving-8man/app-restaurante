<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();
const esCliente = ref(false);


onMounted(() => {
  let perfilCliente = 'cliente';
  const userInfo = authStore.getUserInfo;

  if (userInfo !== null) {
    if (userInfo.perfil === perfilCliente) {
      esCliente.value = true;
    } else {
      router.push({ name: 'home' });
    }
  } else {
    router.push({ name: 'home' });
  }

}),

  watchEffect(() => {
    let perfilCliente = 'cliente';
    const userInfo = authStore.getUserInfo;

    if (userInfo !== null) {
      if (userInfo.perfil === perfilCliente) {
        esCliente.value = true;
      } else {
        router.push({ name: 'home' });
      }
    } else {
      router.push({ name: 'home' });
    }
  });

/**
 * ?formar composables luego
 */


</script>


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
          <li :class="{ 'active': $route.path === '/user/userperfil' }">
            <router-link to="/user/userperfil" style="color: black; font-weight: bold;">Perfil</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/user/usermesasreserva' }">
            <router-link to="/user/usermesasreserva" style="color: rgb(0, 0, 0);">Mesas</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/user/userpedidosproceso' }">
            <router-link to="/user/userpedidosproceso" style="color: black;">Pedidos</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="User">
      <div class="rectangulo">
        <h1>Mi perfil</h1>
      </div>
      <div class="rectanguloUser">

        <form @submit.prevent="guardarCambios" class="mi-formulario">
          <br>
          <label for="nombre" class="salto">Nombre:</label>
          <input type="text" id="nombre" v-model="nombre" />

          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" v-model="apellido" />

          <label for="correo">Correo:</label>
          <input type="email" id="correo" v-model="correo" />

          <label for="telefono">Teléfono:</label>
          <input type="tel" id="telefono" v-model="telefono" />

          <label for="contrasenaActual">Contraseña Actual:</label>
          <input type="password" id="contrasenaActual" v-model="contrasenaActual" />

          <label for="contrasenaNueva">Contraseña Nueva:</label>
          <input type="password" id="contrasenaNueva" v-model="contrasenaNueva" />

          <button type="submit">Guardar Cambios</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'Irving',
      apellido: 'Cupul',
      correo: 'Irving1234@gmail.com',
      telefono: '9861137404',
      contrasenaActual: 'Hola123',
      contrasenaNueva: ''
    };
  },
  methods: {
    guardarCambios() {
      // Puedes agregar la lógica para guardar los cambios aquí
      console.log('Guardando cambios...');
    }
  }
};
</script>

<style scoped>
.mi-formulario {
  max-width: 550px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: box-shadow 0.3s;
}

input:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
}

button {
  background-color: red;
  color: white;
  width: 550px;
  padding: 10px;
  /* Agregado para espaciado interno */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  /* Evita el salto de línea en el texto */
  overflow: hidden;
  /* Oculta el contenido que excede el ancho especificado */
  text-overflow: ellipsis;
  /* Muestra puntos suspensivos (...) para el contenido que no cabe */
}

button:hover {
  background-color: orange;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(1, minmax(50px, 1fr));
}

.User {
  grid-column: span 2;
}

.rectangulo {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 50px;
  text-align: center;
  width: 650px;
  margin-left: 30px;
}

.rectanguloUser {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 25px;
  height: 650px;
  width: 650px;
  margin-left: 30px;
}

.menu-sidebar {

  height: 100vh;
  width: 350px;
  background-color: rgb(255, 255, 255);
  justify-content: flex-start;
  /* Ajuste para posicionar a la izquierda */
  align-items: flex-start;
  /* Ajuste para posicionar arriba */
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
  color: black;
  /* Cambiar el color a negro */
}

li.active {
  font-weight: bold;
  color: rgb(0, 0, 0);
}</style>

