<template>
  <section class="section">
    <h2 class="section-title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>
