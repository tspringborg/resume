<template>
  <div id="doc2">
    <div id="inner">
      <ResumeHeader :personal="data.personal" />

      <div id="bd">
        <ResumeSection title="Summary">
          <p class="enlarge">{{ data.summary[0] }}</p>
          <br>
          <p class="enlarge">{{ data.summary[1] }}</p>
        </ResumeSection>

        <ResumeSection title="Programming languages">
          <div class="talent-columns">
            <ul v-for="(col, i) in data.programmingLanguages" :key="i">
              <li v-for="item in col" :key="item">{{ item }}</li>
            </ul>
          </div>
        </ResumeSection>

        <ResumeSection title="Tools &amp; Frameworks">
          <div class="talent-columns">
            <ul v-for="(col, i) in data.toolsAndFrameworks" :key="i">
              <li v-for="item in col" :key="item">{{ item }}</li>
            </ul>
          </div>
        </ResumeSection>

        <ResumeSection title="Experience">
          <JobEntry
            v-for="(job, i) in data.experience"
            :key="i"
            :job="job"
            :is-last="job.isLast || false"
          />
        </ResumeSection>

        <ResumeSection title="Other: ">
          <JobEntry
            v-for="(job, i) in data.otherExperience"
            :key="i"
            :job="job"
            :is-last="job.isLast || false"
          />
        </ResumeSection>

        <ResumeSection title="Awards and Honors">
          <JobEntry
            v-for="(job, i) in data.awards"
            :key="i"
            :job="job"
            :is-last="job.isLast || false"
          />
        </ResumeSection>

        <ResumeSection title="Other people about me:">
          <div class="testimonial-columns">
            <div class="testimonial" v-for="t in data.testimonials" :key="t.name">
              <h2>{{ t.name }}</h2>
              <p>{{ t.text }}</p>
            </div>
          </div>
        </ResumeSection>

        <ResumeSection title="Education" :is-last="true">
          <div v-for="edu in data.education" :key="edu.institution" class="education-entry">
            <h2>{{ edu.institution }}</h2>
            <h3>{{ edu.degree }}</h3>
          </div>
        </ResumeSection>
      </div>

      <div class="footer">
        <p>Thomas Springborg — <a :href="'mailto:' + data.personal.email">{{ data.personal.email }}</a> — {{ data.personal.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from './data/resume.js'
import ResumeHeader from './components/ResumeHeader.vue'
import ResumeSection from './components/ResumeSection.vue'
import JobEntry from './components/JobEntry.vue'
</script>
