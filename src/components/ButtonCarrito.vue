<template>
    <v-badge :content="este.totalUnidades">
        <button class="buton" @click="carrito.limpiarStorage">
            <div class="contentIcon">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#ffffff">
                        <path
                            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                </div>
                <div>
                    Ver Orden
                </div>
            </div>
        </button>
    </v-badge>
</template>
<script setup>
import { useCarritoStore } from '@/stores/carrito';
import { useEsteStore } from '@/stores/este';

const carrito = useCarritoStore();
const este = useEsteStore();





</script>
<style scoped>
.buton {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    padding: 16px;
    align-items: center;
    gap: 30px;
    border-radius: 9px;
    font-weight: 500;
    color: #ffffff;
    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    background-color: #7F1D1D;
    background-color: #DC2626;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.buton:hover {
    background-color: #991B1B;
    background-color: #991B1B;
}

.contentIcon {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: center;
    gap: 10px;
}
</style>