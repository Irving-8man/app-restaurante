import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/MenuView.vue"),
    },
    {
      path: "/mesas",
      name: "mesas",
      component: () => import("../views/MesasView.vue"),
    },
    {
      path: "/contacto",
      name: "contacto",
      component: () => import("../views/ContactoView.vue"),
    },
    {
      path: "/nuestraHistoria",
      name: "nuestraHistoria",
      component: () => import("../views/NuestraHistoriaView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    { 
      path: "/:pathMatch(.*)*", 
      name: "NotFound", 
      component:() => import("../views/NotFound.vue")},
  ],
});

export default router;
