<template>
        <h1>Ahora estás en la Ruta 4! :D</h1>
    <Buttons :currentView="'ruta4'"/>
    <img :src="Ganon" alt="Ganon"/>
</template>
<script setup>
import Buttons from '@/components/Buttons.vue';
import Ganon from '@/assets/Ganon.png'
</script>