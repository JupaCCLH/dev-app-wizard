<template>
  <div>
    <h1>Wizard proyecto Github</h1>
    <Step1Server v-if="currentIndex == 0" />
    <Step2Server v-if="currentIndex == 1" />
    <Step3Server v-if="currentIndex == 2" />

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
