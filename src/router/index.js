import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },    
    { 
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    { 
      path: '/mesas',
      name: 'mesas',
      component: () => import('../views/MesasView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    },
    {
      path: '/nuestraHistoria',
      name: 'nuestraHistoria',
      component: () => import('../views/NuestraHistoriaView.vue')
    }

  ]
})

export default router
