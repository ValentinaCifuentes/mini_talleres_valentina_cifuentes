<template>
    <h1>Ahora estás en la Ruta 1! :D</h1>
    <Buttons :currentView="'ruta1'"/>
    <img :src="Link" alt="Link" />
    
</template>
<script setup>
import Buttons from '@/components/Buttons.vue';
import Link from '@/assets/Link.png'
</script>
