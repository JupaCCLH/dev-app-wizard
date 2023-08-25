<template>
  <div>
    <Step1 v-if="currentIndex == 0" />
    <Step2 v-if="currentIndex == 1" />
    <Step3 v-if="currentIndex == 2" />

    <button v-if="currentIndex > 0" @click="useAppStore().step = currentIndex - 1">
      Atras
    </button>
    <button v-if="currentIndex < 2" @click="useAppStore().step = currentIndex + 1">
      Siguiente
    </button>
  </div>
</template>

<script setup lang="ts">
const currentIndex = computed(() => {
  return useAppStore()?.step;
});
</script>
