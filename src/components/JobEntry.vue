<template>
  <div class="job" :class="{ last: isLast }">
    <h2>{{ job.company }}</h2>
    <h3>{{ job.role }}</h3>
    <h4>{{ job.period }}</h4>
    <p v-for="(desc, i) in job.descriptions" :key="i" v-html="desc"></p>
    <template v-if="job.tech && job.tech.length">
      <h5><i>Technologies &amp; competences:</i></h5>
      <TechTags :tags="job.tech" />
    </template>
  </div>
</template>

<script setup>
import TechTags from './TechTags.vue'

defineProps({
  job: { type: Object, required: true },
  isLast: { type: Boolean, default: false },
})
</script>
