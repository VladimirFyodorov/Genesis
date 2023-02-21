<script setup lang="ts">
import { useStore  } from '../store';
import { OptionsEn, optionsMap } from '../types';
const store = useStore();

function handleChange(e: Event): void {
  const value = (e.target as HTMLSelectElement ).value as OptionsEn;
  store.changeSelect(value);
  // if (value === 'deal' || value === 'contact' || value === 'company'|| value === 'default') {
  //   store.changeSelect(value);
  // }
}

</script>

<template>
  <select :value="store.state.selectedOption" @change="handleChange" :disabled="store.selectDisabled">
    <template v-for="([optionEn, optionRu]) in optionsMap">
      <option v-if="optionEn !== 'default'" :value="optionEn">{{ optionRu }}</option>
      <option v-else :value="optionEn" selected>{{ optionRu }}</option>
    </template>
  </select>
</template>

<style scoped>
select {
  width: 150px;
  height: 30px;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 6px;

  cursor: pointer;

  background-color: var(--color-not-active);

  margin-right: 1rem;
}

</style>