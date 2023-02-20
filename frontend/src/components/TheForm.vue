<script setup lang="ts">
import TheButton from './Button.vue';
import MySelect from './Select.vue';
import Entities from './Entities.vue';

</script>

<template>
  <form>
    <h2>Создайте сущность</h2>
    <section class="d-flex">
      <MySelect/>
      <TheButton />
    </section>
    <Entities />
  </form>
</template>

<style scoped>
form {
  padding: 50px;
  border-radius: 4px;
  box-shadow: 2px 6px 20px 2px rgba(0 0 0 / 15%);
}

h2 {
  margin-top: 0;
}

.d-flex {
  display: flex;
}
</style>