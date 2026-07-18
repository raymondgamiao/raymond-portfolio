<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <section id="work" class="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
    <SectionHeading number="03" label="work" title="Real systems, real workflows off someone's plate" />

    <p v-reveal class="mt-8 max-w-2xl text-stone-600 dark:text-stone-400">
      Every project here is public, built so you can click around and see how it works before we
      ever talk. The first one is live now, and the other two are in active development.
    </p>
    <div class="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-3">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        v-reveal="index * 120"
        :project="project"
      />
    </div>
  </section>
</template>
