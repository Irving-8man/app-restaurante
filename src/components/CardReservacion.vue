<script setup>
import { ref} from 'vue';
const datosE = defineProps(['mesa','hora'])

const fechaHora =  new Date(datosE.hora);

// Obtener horas y minutos
const horas = fechaHora.getHours();
const minutos = fechaHora.getMinutes();

// Formatear las horas y minutos con ceros a la izquierda si es necesario
const horasFormateadas = horas < 10 ? `0${horas}` : horas;
const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;

// Crear la cadena en formato hh:mm
const horaFormateada = ref('');
horaFormateada.value = `${horasFormateadas}:${minutosFormateados}`;

</script>
<template>
    <v-hover v-slot="{ isHovering, props }" close-delay="200">
        <v-card class="card" :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
            <div class="contentCard">
                <v-avatar size="150" rounded="0">
                    <v-img :src="datosE.mesa.imgM" alt="Mesa"></v-img>
                </v-avatar>

                <div class="contenido">
                    <v-card-title class="mesaNombre">
                        Mesa {{ datosE.mesa.numeroMesa }}
                    </v-card-title>

                    <div class="capacidad">
                        <p>{{ datosE.mesa.unidadesPersonas[0] }} a {{ datosE.mesa.unidadesPersonas[1] }} personas</p>
                    </div>

                    <div class="contentHorario">
                        <div class="horario">
                            <p>{{ horaFormateada }} hr</p>
                        </div>
                    </div>
                </div>
            </div>
        </v-card>
    </v-hover>
</template>

<style scoped>
.contentCard {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 45px;
}


.contenido {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-content: start;
    text-align: start;
    gap: 10px;
}

.mesaNombre {
    padding: 0;
    font-size: 15px;
    text-wrap: balance;
    line-height: 1.4;
    word-wrap: break-word;
    white-space: normal;
}

.card {
    border: 2px solid rgba(235, 194, 86, 0.82);
    background: #FFF;
    border-radius: 0.625rem;
    box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.25);
    width: 400px;
    max-height: 14.3125rem;
    padding: 1.25rem .625rem;
}


.horario {
    background-color: var(--rojo);
    color: white;
    padding: 3px;
    display: inline-block;
}
</style>