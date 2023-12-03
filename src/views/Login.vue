<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';


const authStore = useAuthStore();
const credentials = ref({
    email: '',
    password: '',
});

const router = useRouter();
const errorMessage = ref('');

const login = async () => {
    // Obtener la lista de usuarios almacenados en el localStorage
    const storedUsers = JSON.parse(localStorage.getItem('authUsers')) || [];

    // Buscar al usuario con las credenciales proporcionadas
    const user = storedUsers.find(u => u.email === credentials.value.email && u.password === credentials.value.password);

    if (user) {
        // Simular un inicio de sesión exitoso almacenando el usuario en el estado
        authStore.login(user);

        // Limpiar el formulario para permitir iniciar sesión con nuevas credenciales
        resetForm();

        // Guardar las credenciales en localStorage después de un inicio de sesión exitoso
        saveCredentials(user);

        // Redirigir al usuario a la página de inicio después de un inicio de sesión exitoso
        router.push({ name: 'home' }); // Ajusta 'home' según el nombre de la ruta de tu página de inicio
    } else {
        // Limpiar el formulario en caso de un inicio de sesión fallido
        resetForm();

        // Mostrar mensaje de error
        errorMessage.value = 'Usuario no registrado. Por favor, regístrate.';
    }
};


const resetForm = () => {
    credentials.value = {
        email: '',
        password: '',
    };
};

// Función para guardar las credenciales en localStorage
const saveCredentials = (user) => {
    localStorage.setItem('authCredentials', JSON.stringify({ email: user.email, password: user.password }));
};



// Función para cerrar sesión
const logout = () => {
    // Eliminar las credenciales del localStorage
    localStorage.removeItem('authCredentials');

    // Redirigir al usuario a la página de inicio
    router.push({ name: 'home' }); // Ajusta 'home' según el nombre de la ruta de tu página de inicio
};


/***
 * Del otro modal
 */

const emailRules = ref([(v) => !!v || 'Este campo es requerido', (v) => /.+@.+\..+/.test(v) || 'Ingrese un correo electrónico válido']);
const contraseniaReglas = ref([
    (v) => !!v || 'Este campo es requerido',
    (v) => (v && v.length >= 8) || 'Debe tener al menos 8 caracteres'
]);






const form = ref(false);
const email = ref(null);
const password = ref(null);
const loading = ref(false);
const visible = ref(false);

function onSubmit() {
    if (!form.value) return
    loading.value = true
    setTimeout(() => (loading.value = false), 2000)
    let formData = { email: email.value, contraseña: password.value };
    console.log('Datos enviados:', formData);
}

function required(v) {
    return !!v || 'Field is required'
}

</script>

<template>
    <section class="section_login">
        <div class="custom_card">
            <div>
                <div class="title">
                    <h2>Acceder</h2>
                </div>
                <div class="imge">
                    <svg xmlns="http://www.w3.org/2000/svg" height="5em" viewBox="0 0 512 512" fill="#e60f12">
                        <path
                            d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
                    </svg>
                </div>
            </div>

            <div>
                <v-form v-model="form" @submit.prevent="onSubmit">
                    <v-text-field v-model="email" :readonly="loading" :rules="emailRules" class="mb-2" label="Correo">
                    </v-text-field>

                    <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'" placeholder="Ingresar contraseña" label="Contraseña"
                        prepend-inner-icon="mdi-lock-outline" :readonly="loading" v-model="password"
                        :rules="contraseniaReglas" @click:append-inner="visible = !visible">
                    </v-text-field>

                    <v-btn :disabled="!form" :loading="loading" block  size="large" type="submit" class="butonLogin"
                        variant="elevated">
                        Iniciar sesión
                    </v-btn>

                    <div class="link_resgistro">
                        <p>¿No tienes una cuenta? <router-link to="/registro" class="enlace esylea-red">Regístrate</router-link> </p>
                    </div>
                </v-form>
            </div>

        </div>
    </section>
</template>


<style scoped>

.section_login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.custom_card {
    max-width: 400px;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap:40px;
}

.title{
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 40px;
}

.link_resgistro{
    margin-top: 20px;
}

.enlace{
    color:var(--rojo);
}

.enlace:hover{
    color: black;
}

.butonLogin {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    padding: 9px 20px;
    align-items: center;
    gap: 30px;
    border-radius: 50px;
    font-weight: 500;
    margin-top:20px;
    color: rgb(48, 47, 47);
    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    background-color: #e9cb34;
    background-color: var(--amarillo-dorado);
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0 15px 13px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.butonLogin:hover {
    background-color: var(--amarillo-dorado);
    background-color: #dfbe1b;
    color: rgb(0, 0, 0);
}
</style>
