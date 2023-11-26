<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import CardReservacion from '../components/CardReservacion.vue';
import mesasRestaurante from '../assets/data/mesasRestaurante.json';
import Login from '../components/Login.vue';

const mesas = mesasRestaurante;
const segundos = ref(0);
const HORA_ENTRADA = '1:00 p.m.';
const HORA_SALIDA = '11:00 p.m.'
const PERSONAS_RESERVA = [1, 2, 3, 4, 5, 6];
const HORAS_RESERVA = [
    '1:00 p.m.', '1:30 p.m.',
    '2:00 p.m.', '2:30 p.m.',
    '3:00 p.m.', '3:30 p.m.',
    '4:00 p.m.', '4:30 p.m.',
    '5:00 p.m.', '5:30 p.m.',
    '6:00 p.m.', '6:30 p.m.',
    '7:00 p.m.', '7:30 p.m.',
    '8:00 p.m.', '8:30 p.m.',
    '9:00 p.m.', '9:30 p.m.',
    '10:00 p.m.', '10:30 p.m.',
    '11:00 p.m.'
];


const formatearNumero = (numero) => {
    return numero < 10 ? `0${numero}` : numero;
};

const obtenerHoraActual = () => {
    const fechaActual = new Date();
    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundosFormateados = segundos.value;

    // Ajustar los minutos y segundos si superan 60
    if (segundosFormateados >= 60) {
        minutos += Math.floor(segundosFormateados / 60);
        segundosFormateados %= 60;
    }

    if (minutos >= 60) {
        horas += Math.floor(minutos / 60);
        minutos %= 60;
    }

    return `${formatearNumero(horas)}:${formatearNumero(minutos)}:${formatearNumero(segundosFormateados)}`;
};

const horaActual = ref(obtenerHoraActual());

const actualizarSegundos = () => {
    segundos.value += 1;
    horaActual.value = obtenerHoraActual();
};

// Actualiza los segundos cada segundo
const intervalId = setInterval(actualizarSegundos, 1000);

// Limpia el temporizador cuando el componente se desmonta
onBeforeUnmount(() => {
    clearInterval(intervalId);
});

// Llama a la función una vez para mostrar la hora inicial
onMounted(() => {
    actualizarSegundos();
});


</script>


<template>
    <div class="backTitle">
        <h2 class="titleSeccion">Encuentra tu mesa para la ocasión</h2>

        <form class="busqueda">
            <input type="date" id="fecha" name="fecha" min="2023-11-25" class="input" value="2023-11-25">

            <select name="" id="" class="input">
                <option disabled value="">Selecciona uno</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>

            <select name="Personas" id="" class="input">
                <option disabled value="">Selecciona uno</option>
                <option value="1"> 1 Persona </option>
            </select>

            <button type="button" class="input">Vamos!!</button>
        </form>

    </div>

    <div class="contentTitulo">
        <h3 class="tituloDisponible">Disponibles</h3>
    </div>
    <section class="section">
        <div class="reservaciones">
            <CardReservacion></CardReservacion>
            <CardReservacion></CardReservacion>
            <CardReservacion></CardReservacion>
        </div>
    </section>
</template>



<style scoped>



.backTitle {
    position: relative;
    background: linear-gradient(180deg, #930911 0%, #930911 12.5%, #000 86.98%, #000 100%);
    width: 100%;
    min-height: 300px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 40px;
}


.titleSeccion {
    color: white;
    font-size: 4.0625rem;
    font-weight: 600;
    z-index: 3;
}

.busqueda {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
}

.input {
    background-color: white;
    border-radius: 2px;
    width: 200px;
    height: 30px;
}



.contentTitulo {
    width: 100%;
    max-width: 1260px;
    padding: 20px;
    text-align: start;
    margin-bottom: 20px;
}

.tituloDisponible {
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}


/**Seccion del grid */
.reservaciones {
    width: 100%;
    max-width: 1260px;
    display: grid;
    grid-template-columns: repeat(2, 450px);
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 25px;
}
</style>