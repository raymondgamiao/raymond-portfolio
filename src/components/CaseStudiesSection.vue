<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <section id="work" class="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
    <SectionHeading number="02" label="work" title="Built so you can click around before we ever talk." />

    <div class="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        v-reveal="index * 120"
        :project="project"
      />
    </div>
  </section>
</template>
