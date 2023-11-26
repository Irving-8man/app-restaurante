<script setup>
import { RouterView } from 'vue-router';
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
</script>


<template>
  <HeaderPage />
  <main class="main">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <FooterPage />
</template>



