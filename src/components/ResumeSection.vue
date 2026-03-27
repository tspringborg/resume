<template>
  <div class="section" :class="{ last: isLast }">
    <div class="section__label">
      <h2>{{ title }}</h2>
    </div>
    <div class="section__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  isLast: { type: Boolean, default: false },
})
</script>
