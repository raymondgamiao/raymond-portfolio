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
  <article class="group flex flex-col">
    <component
      :is="project.demoUrl ? 'a' : 'div'"
      :href="project.demoUrl || undefined"
      :target="project.demoUrl ? '_blank' : undefined"
      :rel="project.demoUrl ? 'noopener' : undefined"
      class="relative block overflow-hidden rounded-xl border border-ink/10 dark:border-white/10"
    >
      <img
        :src="project.image"
        :alt="project.imageAlt"
        width="1200"
        height="750"
        loading="lazy"
        decoding="async"
        class="aspect-[8/5] w-full object-cover transition-transform duration-700 ease-lux group-hover:scale-[1.04]"
      />
      <p
        v-if="!project.demoUrl && !project.repoUrl"
        class="absolute bottom-3 left-3 flex items-center gap-2.5 rounded-full bg-night/80 px-4 py-1.5 text-sm text-stone-200 backdrop-blur"
      >
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
        </span>
        <span class="font-display italic">{{ project.status }}</span>
      </p>
    </component>

    <h3 class="mt-5 font-display text-xl font-medium tracking-tight text-ink dark:text-white">
      {{ project.title }}
    </h3>
    <p class="mt-2 flex-1 leading-relaxed text-stone-600 dark:text-stone-400">
      {{ project.description }}
    </p>

    <!-- Buttons appear automatically once demoUrl or repoUrl is set in src/data/projects.js -->
    <div v-if="project.demoUrl || project.repoUrl" class="mt-5 flex flex-wrap gap-3">
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
  </article>
</template>
