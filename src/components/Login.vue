<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        contraseña: ''
      },
      emailRules: [
        (v) => !!v || 'Este campo es requerido',
        (v) => /.+@.+\..+/.test(v) || 'Ingrese un correo electrónico válido'
      ],
      contraseñaReglas: [
        (v) => !!v || 'Este campo es requerido',
        (v) => (v && v.length >= 8) || 'Debe tener al menos 8 caracteres'
      ],
      showModal: false
    };
  },
  methods: {
    submitForm() {
      // Lógica para enviar los datos del formulario
      console.log('Datos enviados:', this.formData);
    }
  }
};
</script>

<!-- Login.vue -->
<template>
    <div>
      <!-- Botón de registro o acceso -->
      <v-btn @click="showModal = true">Acceder</v-btn>
  
      <!-- Modal de inicio de sesión -->
      <v-dialog v-model="showModal" persistent max-width="500">
        <v-card class="custom_card">
          <v-card-title>
            <div class="title">
              <h2>Acceder</h2>
            </div>
            <div class="imge">
                <svg xmlns="http://www.w3.org/2000/svg" height="5em" viewBox="0 0 512 512" fill="#e60f12"><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/></svg>
                <!-- Tu código SVG aquí -->
            </div>
          </v-card-title>
          <v-card-text>
            <!-- Contenido del formulario de inicio de sesión -->
            <form @submit.prevent="submitForm">
              <!-- Campos de entrada de matrícula y contraseña -->
              <v-text-field v-model="formData.email" label="Correo" type="email" required :rules="emailRules" ></v-text-field>
              <v-text-field v-model="formData.password" label="Contraseña" type="password" required :rules="passwordRules"></v-text-field>
              <v-btn color="primary" type="submit">Iniciar Sesión</v-btn>
            </form>
            <div class="link_resgistro">
                <p>¿No tienes una cuenta? <router-link to="/registro">Regístrate</router-link> </p>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </template>
  

  
  <style>
  .custom_card {
    width: auto;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  
  .title {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  
  .imge {
    margin-bottom: 10px;
  }
  
  .link_resgistro {
    margin-top: 10px;
  }
  </style>
  


