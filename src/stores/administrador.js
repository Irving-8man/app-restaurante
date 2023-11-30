import { defineStore } from "pinia";

export const useAdministradorStore = defineStore("administrador", {
  state: () => {
    return {
        administrador: [{
                correo:"geyler0502@outlook.com",
                contraseña: ""
            }],
    };
  },

  getters: {
    totalUnidades(state) {
      return state.administrador;
    },
  },

  actions: {
    
  },
  persist: true,
});
