<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import CardReservacion from '../components/CardReservacion.vue';
import mesasRestaurante from '../assets/data/mesasRestaurante.json';
import personasReserva from '../assets/data/personasReserva.json';
import dayjs from 'dayjs';

//? Datos para 
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

        <form class="busqueda">

            <div class="contBotones">
                <div>
                    <input type="date" id="fecha" name="fecha" class="input" :min="fechaMin" v-model="fechaSeleccionada">
                </div>

                <!--Manejo de las horas-->
                <div class="contGSelect">
                    <div class="contSelect">
                        <div class="iconon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 512 512">
                                <path fill="#000000"
                                    d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                            </svg>
                        </div>
                        <select name="Horas" id="horas" class="input" v-model="horaSeleccionada">
                            <option disabled value="" class="option">Hora</option>
                            <option v-for="hora in horasDisponibles" :value="hora.valorISO" class="option">
                                {{ hora.hora }} hr
                            </option>
                        </select>
                    </div>
                </div>


                <!--Manejo de numero de personas-->
                <div class="contGSelect">
                    <div class="contSelect">
                        <div class="iconon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="19" width="15" viewBox="0 0 448 512">
                                <path fill="#000000"
                                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                            </svg>
                        </div>

                        <select name="Personas" id="numPersonas" class="input" v-model="numPersonasSeleccionadas">
                            <option disabled value="" class="option">Personas</option>
                            <option v-for="numPersonas in personasReservas" :value="numPersonas.valor" class="option">
                                {{ numPersonas.etiqueta }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <!---->
            <div>
                <button type="submit" class="input botonVamos">¡Vamos!</button>
            </div>

        </form>
    </div>

    <div class="contentTitulo">
        <h3 class="tituloDisponible">Disponibles</h3>
    </div>
    <section class="section secReservaciones">
        <div class="reservaciones">
            <CardReservacion></CardReservacion>
            <CardReservacion></CardReservacion>
            <CardReservacion></CardReservacion>

        </div>
    </section>
</template>



<style scoped>
/**HEader */
.backTitle {
    position: relative;
    background: linear-gradient(180deg, var(--rojo) 0%, var(--rojo) 12.5%, #000 86.98%, #000 100%);
    width: 100%;
    min-height: var(--altura-bar-sec);
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

/**Seccion de busqueda */

.busqueda {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    font-size: 1.125rem;
    text-align: center;
}





input,
select,
.input {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    margin: 0;
    background-color: white;
    color: black;
    border-radius: 3px;
    padding: 0 3px;
}

select {
    -webkit-appearance: auto;
}

.contSelect {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;
}

.iconon {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
}

.contGSelect {
    background-color: white;
    border-radius: 3px;
}

.contBotones {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.botonVamos {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    padding: 7px 8px;
    width: 120px;
    align-items: center;
    font-weight: bolder;
    justify-content: center;
    text-align: center;
    gap: 30px;
    border-radius: 8px;
    color: rgb(255, 255, 255);
    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    background-color: #e9cb34;
    background-color: var(--amarillo-dorado);
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0 15px 13px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.botonVamos:hover {
    background-color: var(--amarillo-dorado);
    background-color: #e9c511;
    color: rgb(255, 255, 255);
}



/**Parte de las rservas */

.secReservaciones {
    min-height: 50vh;
}

.contentTitulo {
    width: 100%;
    max-width: 1260px;
    text-align: start;
    margin-bottom: 25px;
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
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 30px;
}
</style>