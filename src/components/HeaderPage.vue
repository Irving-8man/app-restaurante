<script setup>
import { RouterLink } from 'vue-router'
import ButtonTypeOne from './ButtonTypeOne.vue';
</script>


<template>
    <header class="header">
        <div class="contentPrincipal">
            <!---->
            <div class="principal">
                <div class="imgLogo">
                    <img src="../assets/img/logoPanda.jpg" alt="logo del restaurante" class="logo">
                </div>
                <div class="tituloPrincipal">
                    <RouterLink to="/">
                        <h1 class="titulo">China Town</h1>
                    </RouterLink>
                </div>
            </div>
            <!---->
            <div class="navegacion">
                <nav>
                    <ul class="listNav">
                        <li class="pagina">
                            <RouterLink to="/menu" class="enlace">Menú</RouterLink>
                        </li>
                        <li class="pagina">
                            <RouterLink to="/mesas" class="enlace">Mesas</RouterLink>
                        </li>
                        <li class="pagina">
                            <RouterLink to="/contacto" class="enlace">Contacto</RouterLink>
                        </li>
                        <li class="pagina">
                            <RouterLink to="/nuestraHistoria" class="enlace">Nuestra historia</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="ingresar">
            <ButtonTypeOne titulo="Acceder" enlace="/nuestraHistoria"></ButtonTypeOne>
        </div>
    </header>
</template>


<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: var(--rojo);
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: .4375rem .625rem;
}


.logo{
    clip-path: circle(50% at 50% 50%);
    height: 40px;
}

.principal {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 8px;
}

.ingresar {
}

.titulo {
    text-transform: uppercase;
    font-size: 1.25rem;
}

.listNav {
    display: flex;
    flex-flow: row nowrap;
    gap: 1.25rem;
}

.pagina>a {
    font-weight: 100;
}

.contentPrincipal {
    display: flex;
    flex-flow: row nowrap;
    gap: 3.125rem;
    align-content: center;
    align-items: center;
}

</style>