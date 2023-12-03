<script setup>
const props = defineProps(['mesa'])

</script>
<template>
    <v-hover v-slot="{ isHovering, props }" close-delay="200">
        <v-card class="card" :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
            <div class="contentCard">
                <v-avatar size="150" rounded="0">
                    <v-img src="src/assets/img/mesas/mesaIndividual_1.jpg" alt="Este"></v-img>
                </v-avatar>

                <div class="contenido">
                    <v-card-title class="mesaNombre">
                        mesa 1
                    </v-card-title>

                    <div class="capacidad">
                        <p>1 a 2 personas</p>
                    </div>

                    <div class="contentHorario">
                        <div class="horario">
                            <p>10:00 p.m.</p>
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