<template>
    <h1>Ahora estás en la Ruta 5! :D</h1>
    <Buttons :currentView="'ruta5'"/>
    <img :src="Impa" alt="Impa"/>
</template>
<script setup>
import Buttons from '@/components/Buttons.vue';
import Impa from '@/assets/Impa.png';
</script>