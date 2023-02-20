<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  border: 2px solid var(--color-white);
  border-top: 2px solid var(--color-call-to-action);
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>