<script setup>
import { Lock } from 'lucide-vue-next'
import SectionHeading from '@/components/SectionHeading.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { featuredCaseStudy, projects } from '@/data/projects'
</script>

<template>
  <section id="work" class="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
    <SectionHeading number="03" label="work" title="Real systems, real workflows off someone's plate" />

    <!-- Featured case study, framed like a physical plate: outer shell + inner core -->
    <div
      v-reveal
      class="mt-16 rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5 dark:bg-white/5 dark:ring-white/10"
    >
      <article
        class="rounded-[calc(2rem-0.375rem)] bg-paper p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] sm:p-12 dark:bg-night dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]"
      >
        <p class="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
          <Lock class="h-3.5 w-3.5" :stroke-width="1.5" />
          <span class="font-display italic">{{ featuredCaseStudy.badge }}</span>
        </p>
        <h3
          class="mt-6 max-w-3xl font-display text-3xl font-medium tracking-tight text-balance text-ink sm:text-4xl dark:text-white"
        >
          {{ featuredCaseStudy.title }}
        </h3>

        <div class="mt-12 grid gap-10 md:grid-cols-2">
          <div v-reveal>
            <h4 class="font-display text-lg italic text-accent">The problem</h4>
            <p class="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">
              {{ featuredCaseStudy.problem }}
            </p>
          </div>
          <div v-reveal="120">
            <h4 class="font-display text-lg italic text-accent">The solution</h4>
            <p class="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">
              {{ featuredCaseStudy.solution }}
            </p>
          </div>
        </div>

        <div v-reveal class="mt-12 border-t border-ink/10 pt-8 dark:border-white/10">
          <h4 class="font-display text-lg italic text-accent">The results</h4>
          <ul class="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-3">
            <li
              v-for="result in featuredCaseStudy.results"
              :key="result"
              class="leading-relaxed text-stone-600 dark:text-stone-400"
            >
              <span aria-hidden="true" class="mb-3 block h-px w-8 bg-accent"></span>
              {{ result }}
            </li>
          </ul>
        </div>
      </article>
    </div>

    <!-- Public demo projects -->
    <div v-reveal class="mt-24 flex items-baseline gap-4">
      <h3 class="font-display text-2xl font-medium tracking-tight text-ink dark:text-white">
        Demo projects
      </h3>
      <span aria-hidden="true" class="h-px flex-1 self-center bg-ink/10 dark:bg-white/10"></span>
    </div>
    <p v-reveal class="mt-3 max-w-2xl text-stone-600 dark:text-stone-400">
      Public versions of the same kinds of systems, built so you can click around and see how they
      work before we ever talk. The first demo is live now, and the other two are in active
      development.
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
