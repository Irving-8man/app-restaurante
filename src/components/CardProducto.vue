<script setup>
import SelectProducto from './SelectProducto.vue';
const props = defineProps(['producto'])
let costo = 100;
</script>
<template>
    <v-card class="card">
        <div class="contentCard">
            <div class="contenido">
                <v-card-title class="productoNombre">
                    {{ props.producto.Nombre }}
                </v-card-title>

                <div class="precio">
                    <p> <strong>$ {{ props.producto.Costo }} </strong></p>
                </div>

                <v-card-actions>
                    <SelectProducto></SelectProducto>
                </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="100" rounded="0">
                <v-img :src="props.producto.img"></v-img>
            </v-avatar>
        </div>
    </v-card>
</template>

<style scoped>
.contentCard {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}

.precio {
    padding-left: 1rem;
}

.contenido {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-content: center;
    min-height: 80px;
    gap: 5px;
}

.productoNombre {
    font-size: 15px;
    word-wrap: break-word;
    white-space:normal;
    line-height: 1.4;
}

.card {
    padding: .5625rem;
    border-radius: 1.875rem;
    box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.25);
    max-height: 180px;
    width: 330px;
    max-width: 330px;
}
</style>