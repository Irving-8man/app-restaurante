import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useEsteStore = defineStore("este", {
  state: () => {
    return {
      listaArticulos: [],
    };
  },

  getters: {
    totalUnidades(state) {
      return state.listaArticulos.reduce((total, articulo) => total + articulo.Unidades, 0);
    },
    
    totalPago(state) {
      return state.listaArticulos.reduce((total, articulo) => total + articulo.CostoParcial, 0);
    },
  },

  actions: {
    agregarProducto(producto) {
      let indice = this.listaArticulos.findIndex((p) => p.ID === producto.ID);
      let noDisponible = -1;

      if (indice !== noDisponible) {
        this.listaArticulos[indice].Unidades += producto.Unidades;
        this.listaArticulos[indice].CostoParcial += producto.CostoParcial;
      } else {
        this.listaArticulos.push({ ...producto });
      }
      console.log(this.listaArticulos);
    },
    actualizarProductoUnidades(id,unidades){

    },
    eliminarProducto(id){
      
    }
  },
});
