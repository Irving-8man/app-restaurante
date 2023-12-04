import { defineStore } from "pinia";

export const useReservasStore = defineStore("reservas", {
    state: () => {
        return {
            reservaciones: {},
        };
    },
    getters: {
        getReservas(state){
            return state.reservaciones;
        }
    },
    actions: {
        nuevaReservacion(fecha,reservacion) {
            let conseguido = false;

            if (!this.reservaciones[fecha]) {
                this.reservaciones[fecha] = [];
            }
            conseguido = this.reservaciones[fecha].push(reservacion);
            return conseguido;
        },

    },
    persist:true,
})
