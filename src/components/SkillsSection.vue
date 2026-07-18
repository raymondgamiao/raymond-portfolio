<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { skillGroups } from '@/data/skills'
</script>

<template>
  <section id="skills" class="bg-paper-soft transition-colors dark:bg-night-soft">
    <div class="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
      <SectionHeading number="03" label="skills" title="The toolkit behind the automations" />

      <div class="mt-12 space-y-10">
        <div v-for="(group, groupIndex) in skillGroups" :key="group.title" v-reveal="groupIndex * 120">
          <h3 class="font-display text-lg font-medium italic text-stone-500 dark:text-stone-400">
            {{ group.title }}
          </h3>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="skill in group.skills"
              :key="skill"
              class="rounded-full border border-ink/15 px-3.5 py-1.5 text-sm font-medium text-stone-700 dark:border-white/15 dark:text-stone-300"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
