import { defineStore } from 'pinia';

export const useCounterStore = defineStore('user', {
    state: () => {
        return { 
            username: '',
            email: "",
            password: ''
        }
    }
})