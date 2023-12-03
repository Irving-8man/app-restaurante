import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),

  actions: {
    login({ email, password }) {
      this.user = { email };
    },
    register(user) {
      this.user = { ...user };
    },
    logout() {
      this.user = null;
    },
    // Nueva acción para persistir en localStorage
    persistState() {
      localStorage.setItem("authState", JSON.stringify(this.$state));
    },
  },
});
