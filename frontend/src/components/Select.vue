<script setup lang="ts">
import { useStore  } from '../store';
const store = useStore();

function handleChange(e: Event): void {
  const value = (e.target as HTMLSelectElement ).value;
  if (value === 'deal' || value === 'contact' || value === 'company'|| value === 'default') {
    store.changeSelect(value);
  }
}

</script>

<template>
  <select :value="store.state.selectedOption" @change="handleChange" :disabled="store.selectDisabled">
    <option value="default" selected>Не выбрано</option>
    <option value="deal">Сделка</option>
    <option value="contact">Контакт</option>
    <option value="company">Компания</option>
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