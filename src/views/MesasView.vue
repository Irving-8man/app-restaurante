<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import CardReservacion from '../components/CardReservacion.vue';
import mesasRestaurante from '../assets/data/mesasRestaurante.json';
import personasReserva from '../assets/data/personasReserva.json';
import { useCounterStore } from '@/stores/counter';
import dayjs from 'dayjs';

//? Datos para 
const store = useCounterStore();
const mesas = mesasRestaurante;


/**
 * todo Logica de las horas y fecha
 * !fechas
 */

const fechaCompletaAhora = ref(dayjs());

onMounted(() => {
    const intervalo = setInterval(() => {
        fechaCompletaAhora.value = dayjs();
    }, 1000);

    onUnmounted(() => clearInterval(intervalo));
});

// Método computado para obtener la fecha actual
const fechaAhora = computed(() => {
    return fechaCompletaAhora.value.format('YYYY-MM-DD');
});

//Fecha seleccionada
const fechaSeleccionada = ref(fechaAhora.value);

// Variable computada para la fecha mínima
const fechaMin = computed(() => {
    const horaFin = dayjs(fechaAhora.value).set('hour', 22).set('minute', 30);

    // Si la hora actual ha pasado la horaFin, devuelve la fecha para el siguiente día
    if (dayjs().isAfter(horaFin)) {
        return dayjs(fechaAhora.value).add(1, 'day').format('YYYY-MM-DD');
    } else {
        return fechaAhora.value;
    }
});


watch(fechaAhora, (nuevoValor) => {
    const horaFin = dayjs(nuevoValor).set('hour', 22).set('minute', 30);
    // Si la hora actual ha pasado la horaFin, actualiza fechaMin directamente
    if (dayjs().isAfter(horaFin)) {
        fechaMin.value = dayjs(nuevoValor).add(1, 'day').format('YYYY-MM-DD');
    }

    // Si fechaSeleccionada está en el día que pasamos, ajusta automáticamente
    if (dayjs(fechaSeleccionada.value).isSame(horaFin, 'day')) {
        fechaSeleccionada.value = fechaMin.value;
    }
});


/**
 * !horas
 */
function obtenerHorasDisponiblesParaFecha(fechaMostrar) {
    const horaInicio = dayjs(fechaMostrar).set('hour', 13).set('minute', 0); // Hora de inicio a las 13:00
    const horaFin = dayjs(fechaMostrar).set('hour', 22).set('minute', 30); // Última hora a las 22:30
    const intervalo = 30; // Intervalo de 30 minutos

    // Determina el inicio de las horas disponibles
    let horaActualCalculada = dayjs(fechaMostrar).isSame(dayjs(), 'day')
        ? fechaCompletaAhora.value.add(intervalo - (fechaCompletaAhora.value.minute() % intervalo), 'minute')
        : horaInicio;

    // Si la fechaMin ha cambiado, muestra todas las opciones de nuevo
    if (dayjs(fechaMostrar).isSame(fechaMin.value, 'day')) {
        horaActualCalculada = horaInicio;
    }

    const horas = [];

    while (horaActualCalculada.isBefore(horaFin) || horaActualCalculada.isSame(horaFin)) {
        // Verifica si la hora actual calculada está después de la hora actual
        if (horaActualCalculada.isAfter(fechaCompletaAhora.value)) {
            const horaFormateada = horaActualCalculada.format('HH:mm');
            const valorISO = horaActualCalculada.format('YYYY-MM-DDTHH:mm:ss');
            horas.push({ hora: horaFormateada, valorISO: valorISO });
        }
        horaActualCalculada = horaActualCalculada.add(intervalo, 'minute');
    }

    return horas;
}

const horasDisponibles = computed(() => {
    const fechaMostrar = fechaSeleccionada.value;
    return obtenerHorasDisponiblesParaFecha(fechaMostrar);
});

watch(fechaSeleccionada, (nuevaFechaSeleccionada) => {
    const horasDisponiblesParaFecha = obtenerHorasDisponiblesParaFecha(nuevaFechaSeleccionada);

    // Verifica si la horaSeleccionada actual está en las nuevas horas disponibles
    const horaExistente = horasDisponiblesParaFecha.find(hora => hora.valorISO === horaSeleccionada.value);

    // Si la hora actual no está en las nuevas horas disponibles y hay al menos una hora disponible, establece la primera como predeterminada
    if (!horaExistente && horasDisponiblesParaFecha.length > 0) {
        horaSeleccionada.value = horasDisponiblesParaFecha[0].valorISO;
    }
});



/**
 * todo Trabajando el numero de personas
 */
const personasReservas = ref(personasReserva);
const numPersonasSeleccionadas = ref('');
const horaSeleccionada = ref('');



</script>


<template>
    <div class="backTitle">
        <h2 class="titleSeccion">Encuentra tu mesa para la ocasión</h2>

        <form class="busqueda" @submit.prevent="store.increment">
            <input type="date" id="fecha" name="fecha" class="input" :min="fechaMin" v-model="fechaSeleccionada">

            <!--Manejo de las horas-->
            <div class="contHoras">
                <select name="Horas" id="horas" class="input" v-model="horaSeleccionada">
                    <option disabled value="">Hora</option>
                    <option v-for="hora in horasDisponibles" :value="hora.valorISO">
                        {{ hora.hora }}
                    </option>
                </select>
            </div>

            <!--Manejo de numero de personas-->
            <select name="Personas" id="numPersonas" class="input" v-model="numPersonasSeleccionadas">
                <option disabled value="">Personas</option>
                <option v-for="numPersonas in personasReservas" :value="numPersonas.valor">
                    {{ numPersonas.etiqueta }}
                </option>
            </select>
            <!---->
            <button type="submit" class="input">Vamos!!</button>
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
    background: linear-gradient(180deg, var(--rojo) 0%, var(--rojo) 12.5%, #000 86.98%, #000 100%);
    width: 100%;
    min-height: var(--altura-bar-sec);
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