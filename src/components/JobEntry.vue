<template>
  <div class="entry">
    <div class="entry-header">
      <span class="entry-company">{{ job.company }}</span>
      <span class="entry-dates">{{ job.period }}</span>
    </div>
    <div v-if="job.role" class="entry-role">{{ job.role }}</div>
    <div class="entry-description">
      <p v-for="(desc, i) in job.descriptions" :key="i" v-html="desc"></p>
    </div>
    <div v-if="job.tech && job.tech.length" class="entry-tags">
      <span class="tag" v-for="tag in job.tech" :key="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  job: { type: Object, required: true },
})
</script>
