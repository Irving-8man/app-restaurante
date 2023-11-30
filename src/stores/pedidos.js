import { defineStore } from "pinia";
import { useNumeroPedidoStore } from "./numeroPedido";
import dayjs from "dayjs";

export const usePedidosStore = defineStore("pedidos", {
    state: () => {
        return {
            pedidos: [],
        };
    },
    getters: {
        getPedidos(state) {
            return state.pedidos;
        },

    },
    actions: {
        nuevoPedido(pedido) {
            const useNumPedido = useNumeroPedidoStore(); 
            const {getNumeroPedido} =  useNumPedido;

            let miNuevoPedido = {
                "NumPedido": getNumeroPedido,
                "Fecha": dayjs().format('DD-MM-YYYY'),
                "Correo": "geyler0502@outlook.com",
                "Entregado":false,
                "Carrito": pedido,
            };

            this.misPedidos.push({ ...miNuevoPedido });
            useNumPedido.siguientePedido();
        },
        eliminarPedido(NumPedido){
            const index = this.misPedidos.findIndex(pedido => pedido.NumPedido === NumPedido);
            if (index !== -1) {
                this.misPedidos.splice(index, 1);
            }
        },
        pedidoEntregado(NumPedido) {
            const entregado = true; 
            let indice = this.misPedidos.findIndex((p) => p.NumPedido === NumPedido);
            let noDisponible = -1;
            
            if (indice !== noDisponible) {
                this.misPedidos[indice].Entregado = entregado;
            }
        },
    },

    persist: true,
})