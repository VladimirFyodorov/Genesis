<script setup lang="ts">
import { useStore } from '../store';

const store = useStore();
</script>

<template>
  <section>
    <p>Созданные сущности</p>
    <ul>
      <li v-for="entety of store.state.entities" :key="entety.id">{{ `${entety.id}: ${entety.name}` }}</li>
    </ul>
  </section>
</template>

<style scoped>
section {
  margin-top: 2rem;
}

ul {
  list-style-type: none;
  padding-left: 1rem;
}
</style>