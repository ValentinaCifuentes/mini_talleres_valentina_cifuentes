<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  routes: {
    type: Array,
    required: true,
  },
});

const router = useRouter();

const routes = [
    { path: '/ruta1', name: 'Ruta 1' },
    { path: '/ruta2', name: 'Ruta 2' },
    { path: '/ruta3', name: 'Ruta 3' },
    { path: '/ruta4', name: 'Ruta 4' },
    { path: '/ruta5', name: 'Ruta 5' },
  ];

const navigateTo = (path) => {
  router.push(path);
};
</script>

<template>
    <div>
        <button v-for="(route, index) in routes" :key="index" @click="navigateTo(route.path)">
          {{ route.name }}
    </button>
    </div>
</template>
<style scoped>
div{
    width: fit-content;
    display: flex;
}
.nav-button{
    width: 60px;
    height: 35px;
}
</style>