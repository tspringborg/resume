<template>
  <div class="skills-grid">
    <span
      v-for="tag in tags"
      :key="tag.name || tag"
      class="tag"
      :class="{ highlight: true }"
    >{{ tag.name || tag }}</span>
  </div>
</template>

<script setup>
defineProps({
  tags: { type: Array, required: true },
})
</script>
