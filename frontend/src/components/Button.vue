<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useStore } from '../store';
import Loader from './Loader.vue';
import { APIService } from '../services/APIService';
const store = useStore();

const submit = async () => {
  console.log('start submit');
  store.startSubmit();
  const name = store.state.selectedOption;
  if (name === 'default') return;

  (new APIService).post(name)
    .then(entity => store.endSubmit(entity))
    .catch(err => {
      console.log(err);
      store.endSubmitWithErr();
    });
};

const btnText = computed(() => {
  switch (store.state.formState) {
    case 'INVALID':
    case 'VALID':
      return 'Создать';
    case 'PENDING':
      return '';
  }
});

</script>

<template>
  <button
    type="submit"
    @click="submit"
    :class="store.state.formState"
    :disabled="store.btnDisabled">
    {{ btnText }}
    <Loader v-if="store.state.formState === 'PENDING'" />
  </button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 30px;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  background-color: var(--color-call-to-action);
}
.INVALID {
  background-color: var(--color-not-active);
  color: var(--color-main);
}

.VALID {
  color: var(--color-white);
}

</style>