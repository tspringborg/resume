<template>
  <div class="header">
    <div>
      <h1>{{ personal.name }}</h1>
      <h2>{{ personal.title }}</h2>
    </div>
    <div class="contact-info">
      <h3><a :href="'mailto:' + personal.email">{{ personal.email }}</a></h3>
      <h3>{{ personal.phone }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  personal: { type: Object, required: true },
})
</script>
