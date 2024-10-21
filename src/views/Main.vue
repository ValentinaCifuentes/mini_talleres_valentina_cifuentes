<template>
    <div>
      <h1>Página Principal</h1>
      <Buttons/>
      <SecretWord />
    </div>
  </template>
  
  <script setup>
  import Buttons from '../components/Buttons.vue';
  import SecretWord from '../components/SecretWord.vue';
  

  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>