import { ref, computed ,Ref} from "vue";
import { defineStore } from "pinia";

export const useCarritoStore = defineStore("carrito", () => {
  //* Pagos
  const costoTotal = ref(0);
  const costoParcial = ref(0);
  const productosCompra = Ref({})


  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
