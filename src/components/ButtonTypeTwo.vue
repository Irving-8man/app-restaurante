<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['titulo', 'enlace'])

</script>
<template>
    <span>
        <RouterLink :to="props.enlace" class="hbtn hb-fill-middle2-bg hpill hbor3">{{ props.titulo }} </RouterLink>
    </span>
</template>

<style scoped>
.hbtn {
    position: relative;
    display: inline-block;
    overflow: hidden;
    padding: 8px 20px;
    margin: 0px 3px 6px;
    text-align: center;
    text-decoration: none;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    z-index: 0;
} 


.hbtn i {
    padding-right: 8px;
} 

/**Cierre */
.hb-fill-middle2-bg::before {
    position: absolute;
    content: "";
    background: var(--rojo);
    transition-duration: 0.3s;
    z-index: -1;
    inset: 0px 0px auto auto;
    width: 0px;
    height: 100%;
    opacity: 1;
} 


.hb-fill-middle2-bg:hover::before {
    width: 50%;
    height: 100%;
    opacity: 1;
} 

/**Aqui cambia color de texto inicial */
.hb-fill-middle2-bg {
    background: var(--amarillo-dorado);
    color: #333333;
    transition: all 0.3s ease 0s;
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.5);
} 


.hb-fill-middle2-bg:hover {
    color: rgb(255, 255, 255);
    background: white;
    transition: all 0.3s ease 0s;
} 

/**Cierre */
.hb-fill-middle2-bg::after {
    position: absolute;
    content: "";
    background: var(--rojo);
    transition-duration: 0.3s;
    z-index: -1;
    inset: 0px auto auto 0px;
    width: 0px;
    height: 100%;
    opacity: 1;
} 


.hb-fill-middle2-bg:hover::after {
    width: 50%;
} 


.hpill {
    border-radius: 50px;
} 


</style>