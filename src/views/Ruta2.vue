<template>
    <h1>Ahora estás en la Ruta 2! :D</h1>
    <Buttons :currentView="'ruta2'"/>
    <img :src="Zelda" alt="Zelda"/>
</template>
<script setup>
import Buttons from '@/components/Buttons.vue';
import Zelda from '@/assets/Zelda.png'
</script>