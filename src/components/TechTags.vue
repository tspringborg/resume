<template>
  <div class="tech">
    <span v-for="tag in tags" :key="tag">{{ tag }}</span>
  </div>
</template>

<script setup>
defineProps({
  tags: { type: Array, required: true },
})
</script>
