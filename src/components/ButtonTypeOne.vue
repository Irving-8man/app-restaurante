<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['titulo', 'enlace'])

</script>

<template>
    <span>
        <RouterLink :to="props.enlace" class="hbtn hb-fill-middle-bg hpill">{{ props.titulo }} </RouterLink>
    </span>
</template>

<style scope>
.hbtn {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    padding: 8px 20px;
    margin: 0px 3px 6px;
    text-align: center;
    border: 2px solid rgb(255, 255, 255);
    text-decoration: none;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    z-index: 0;
    font-weight:600;
}


.hbtn i {
    padding-right: 8px;
}


.hb-fill-middle-bg::before {
    position: absolute;
    content: "";
    background: rgb(255, 255, 255);
    transition-duration: 0.3s;
    z-index: -1;
    inset: auto auto 0px 0px;
    width: 100%;
    height: 0px;
    opacity: 1;
}


.hb-fill-middle-bg:hover::before {
    width: 100%;
    height: 50%;
    opacity: 1;
}


.hb-fill-middle-bg:hover {
    color: rgb(0, 0, 0);
    background: rgb(255, 255, 255);
    transition: all 0.3s ease 0s;
}


.hb-fill-middle-bg::after {
    position: absolute;
    content: "";
    background: rgb(255, 255, 255);
    transition-duration: 0.3s;
    z-index: -1;
    inset: 0px auto auto 0px;
    width: 100%;
    height: 0px;
    opacity: 1;
}


.hb-fill-middle-bg:hover::after {
    height: 50%;
}


.hpill {
    border-radius: 50px;
}
</style>