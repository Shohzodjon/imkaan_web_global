import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDirection = defineStore('direction', () => {
    const direct = ref('ltr');

    const changeDirect = () => {
        direct.value = 'rtl';
    }

    return { direct, changeDirect };
})