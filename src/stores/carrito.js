import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useCarritoStore = defineStore("carrito", () => {
  //* Pagos
  const carrito = useStorage("mi-carrito", []);
  const costoTotal = useStorage("costo-total", 0);
  const unidadesTotales = useStorage("unidadesTotales", 0);


  /**
   * ? CRUD de productos
   */

  //!Agregar producto
  function agregarProducto(producto) {
    let indice = carrito.value.findIndex((p) => p.ID === producto.ID);
    let noDisponible = -1;

    if (indice !== noDisponible) {
      carrito.value[indice].Unidades = producto.Unidades;
      carrito.value[indice].CostoParcial = producto.CostoParcial;
    } else {
      carrito.value.push(producto);
    }
  }

  //!eliminar producto
  function eliminarProducto(ID) {
    const indice = carrito.value.findIndex((item) => item.ID === ID);
    if (indice !== -1) {
      carrito.value.splice(indice, 1);
    }
  }

  //! Buscar unidades por ID
  function buscarUnidadesPorId(ID) {
    const producto = carrito.value.find((p) => p.ID === ID);
    return producto ? producto.Unidades : 0;
  }


  //!Limpiar el storage
  function limpiarStorage() {
    carrito.value = [];
    costoTotal.value = 0;
    location.reload();
  }

  return {
    carrito,
    agregarProducto,
    eliminarProducto,
    buscarUnidadesPorId,
    limpiarStorage,
    costoTotal,
  };
});
