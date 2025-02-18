import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const show = ref(false);
  
  const toggleFunc = () => {
    show.value = !show.value;
  }
  const closeFunc = () => {
    show.value = false;
  }

  return { show, toggleFunc, closeFunc }
})
