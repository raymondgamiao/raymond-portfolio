<script setup>
import { ArrowUpRight, Github } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="group flex flex-col border-t-2 border-ink/15 pt-6 transition-colors duration-500 hover:border-accent dark:border-white/15 dark:hover:border-accent">
    <h3 class="font-display text-xl font-medium tracking-tight text-ink dark:text-white">
      {{ project.title }}
    </h3>
    <p class="mt-3 flex-1 leading-relaxed text-stone-600 dark:text-stone-400">
      {{ project.description }}
    </p>

    <!-- Buttons appear automatically once demoUrl or repoUrl is set in src/data/projects.js -->
    <div v-if="project.demoUrl || project.repoUrl" class="mt-6 flex flex-wrap gap-3">
      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all duration-500 ease-lux hover:bg-accent-hover active:scale-[0.98]"
      >
        Live Demo
        <ArrowUpRight class="h-4 w-4" :stroke-width="1.5" />
      </a>
      <a
        v-if="project.repoUrl"
        :href="project.repoUrl"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2 text-sm font-medium text-stone-700 transition-all duration-500 ease-lux hover:border-accent hover:text-accent active:scale-[0.98] dark:border-white/15 dark:text-stone-300"
      >
        <Github class="h-4 w-4" :stroke-width="1.5" />
        View Code
      </a>
    </div>
    <p v-else class="mt-6 flex items-center gap-2.5 text-sm text-stone-500 dark:text-stone-400">
      <span class="relative flex h-2 w-2">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"></span>
        <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
      </span>
      <span class="font-display italic">{{ project.status }}</span>
    </p>
  </article>
</template>
