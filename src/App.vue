<template>
  <span>Nota 1:</span>
  <input v-model="nota1">
  <span>Nota 2:</span>
  <input v-model="nota2">
  <span>Nota 3:</span>
  <input v-model="nota3">
  <span>Nota 4:</span>
  <input v-model="nota4">
  <span>Nota 5:</span>
  <input v-model="nota5">
  <span>Nota 6:</span>
  <input v-model="nota6">
  <button @click="calcularPromedio">Calcular promedio</button>
  <span>Tu promedio es: {{ promedio }} !</span>
  <button @click="">Obtener Todo</button>
  <button @click="">Obtener Nota  Alumno</button>
  <button @click="obtenerAlumnosAprobados">Alumnos Aprobados</button>
  <div v-if="alumnosAprobados.length > 0">
      <h3>Lista de Alumnos Aprobados</h3>
      <ul>
        <li v-for="alumno in alumnosAprobados" :key="alumno.id">
          {{ alumno.nombre }} - Notas: {{ alumno.notas }}
        </li>
      </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

  const nota1= ref(0);
  const nota2=ref(0);
  const nota3=ref(0);
  const nota4=ref(0);
  const nota5=ref(0);
  const nota6=ref(0);

  const promedio=ref(0);

  const alumnos=ref([]);
  const alumnosAprobados=ref([]);

  const fetchAlumnos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/Alumno');
    alumnos.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error('Error al obtener los alumnos:', error);
  }
};

  const calcularPromedio=()=>{
    promedio.value=((parseFloat(nota1.value)*0.2
                  +parseFloat(nota2.value)*0.2
                  +parseFloat(nota3.value)*0.2
                  +parseFloat(nota4.value)*0.2
                  +parseFloat(nota5.value)*0.1
                  +parseFloat(nota6.value)*0.1)).toFixed(2);
  }

  const obtenerAlumnosAprobados=()=>{
    alumnosAprobados.value = alumnos.value.filter(alumno => {
      const promedio = alumno.notas.reduce((acc, nota) => acc + nota, 0) / alumno.notas.length;
      return promedio > 4.0;
    });
  }
  onMounted(() => {
    fetchAlumnos();
  });
</script>
