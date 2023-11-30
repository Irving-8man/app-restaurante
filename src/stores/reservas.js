import { defineStore } from "pinia";
import dayjs from "dayjs";

export const useReservasStore = defineStore("reservas", {
    state: () => {
        return {
            reservaciones: [],
        };
    },
    getters: {
        getReservas(state) {
            return state.reservaciones;
        },
    },
    actions: {
        nuevaReservacion(cliente, reservacion) {
            
        },
    },

    persist: true,
})
