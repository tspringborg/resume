<template>
  <header class="header">
    <h1>{{ personal.name }}</h1>
    <div class="subtitle">{{ personal.title }}</div>
    <div class="contact">
      <a :href="'mailto:' + personal.email">{{ personal.email }}</a> &middot; {{ personal.phone }}
    </div>
  </header>
</template>

<script setup>
defineProps({
  personal: { type: Object, required: true },
})
</script>
