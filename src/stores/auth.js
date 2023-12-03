import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user_info: null,
  }),

  getters: {
    getUserInfo(state) {
      return state.user_info;
    },
  },

  actions: {
    login(datosUser) {
      this.user_info = datosUser;
    },
    actulizarAuth(user){
        this.user_info = user;
    },
    logout() {
      this.user = null;
    },
  },

  persist: true,
});
