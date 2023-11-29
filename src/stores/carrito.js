import { ref, computed , reactive} from "vue";
import { defineStore } from "pinia";


export const useCarritoStore = defineStore("carrito", () => {
  //* Pagos
  const costoTotal = ref(0);
  const costoParcial = ref(0);
  const carrito = reactive([])


  const doubleCount = computed(() => count.value * 2);

  /**
   * ! CRUD basico
   */

  //Agregar la primera vez producto con unidades
  function agregarProducto( producto, unidades){
      let subTotal = producto.costo;
  }

  //

  return { count, doubleCount, increment };
});
