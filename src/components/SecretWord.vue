<template>
    <h1>Encuentra las palabras secretas en cada ruta! :3 </h1>
    <p>Escribe las palabras separadas por espacio</p>
    <input v-model="userInput"
      type="text"
      placeholder="Ingresa las palabras secreta"
      class="secret-input">
      <button @click="checkWords">Verificar</button>
      <p v-if="message">{{ message }}</p>
</template>

<script setup>
import { ref } from 'vue';

const userInput = ref('');
const message = ref('');

const secretWords = ['Link', 'Zelda', 'Navi', 'Ganon', 'Impa'];

const checkWords = () => {
  const inputWords = userInput.value.trim().split(' ');
  if (JSON.stringify(inputWords.map(word => word.toLowerCase())) === JSON.stringify(secretWords.map(word => word.toLowerCase()))) {
    message.value = '¡Mensaje correcto!';
  } else {
    message.value = 'Mensaje incorrecto. Intenta de nuevo.';
  }
};

</script>