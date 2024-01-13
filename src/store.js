import { writable } from 'svelte/store';

export const formData = writable({
    fullname: '',
    cardnumber: '',
    month: '',
    year: '',
    cvc: '',
    formattedCardNumber: ''
});
