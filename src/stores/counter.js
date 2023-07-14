import { ref, computed, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "../service/axios";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const products = ref([]);
  const load = ref(true);
  const getProduct = async () => {
    const response = await axios.get("/products");
    products.value = response.data;
    load.value = false;
    console.log(products.value);
  };
  onMounted(() => {
    getProduct();
  });
  function increment() {
    count.value++;
  }
  function decrement() {
    count.value--;
  }
  return { count, doubleCount, increment, decrement, getProduct, products, load };
});
