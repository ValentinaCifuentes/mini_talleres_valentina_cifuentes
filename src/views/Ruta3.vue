<template>
        <h1>Ahora estás en la Ruta 3! :D</h1>
    <Buttons :currentView="'ruta3'"/>
    <img :src="Navi" alt="Navi"/>
</template>
<script setup>
import Buttons from '@/components/Buttons.vue';
import Navi from '@/assets/Navi.png';
</script>