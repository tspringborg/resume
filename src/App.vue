<template>
  <div class="container">
    <ResumeHeader :personal="data.personal" />

    <ResumeSection title="Summary">
      <div class="summary">
        <p>{{ data.summary }}</p>
      </div>
    </ResumeSection>

    <ResumeSection title="Programming Languages">
      <TechTags :tags="data.programmingLanguages" />
    </ResumeSection>

    <ResumeSection title="Tools &amp; Frameworks">
      <TechTags :tags="data.toolsAndFrameworks" />
    </ResumeSection>

    <ResumeSection title="Experience">
      <JobEntry
        v-for="(job, i) in data.experience"
        :key="i"
        :job="job"
      />
    </ResumeSection>

    <ResumeSection title="Teaching &amp; Volunteering">
      <JobEntry
        v-for="(job, i) in data.otherExperience"
        :key="i"
        :job="job"
      />
    </ResumeSection>

    <ResumeSection title="Awards &amp; Honors">
      <div v-for="award in data.awards" :key="award.name" class="award">
        <div class="award-name">{{ award.name }}</div>
        <div class="award-detail">{{ award.detail }}</div>
      </div>
    </ResumeSection>

    <ResumeSection title="Recommendations">
      <div v-for="t in data.testimonials" :key="t.name" class="testimonial">
        <p>{{ t.text }}</p>
        <div class="author">&mdash; {{ t.name }}</div>
      </div>
    </ResumeSection>

    <ResumeSection title="Education">
      <div v-for="edu in data.education" :key="edu.institution" class="education-entry">
        <div class="school">{{ edu.institution }}</div>
        <div class="program">{{ edu.degree }}</div>
      </div>
    </ResumeSection>

    <footer class="footer">
      Thomas Springborg &middot;
      <a :href="'mailto:' + data.personal.email">{{ data.personal.email }}</a> &middot;
      {{ data.personal.phone }}
    </footer>
  </div>
</template>

<script setup>
import data from './data/resume.js'
import ResumeHeader from './components/ResumeHeader.vue'
import ResumeSection from './components/ResumeSection.vue'
import JobEntry from './components/JobEntry.vue'
import TechTags from './components/TechTags.vue'
</script>
