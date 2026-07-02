<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { skillGroups } from '@/data/skills'
</script>

<template>
  <section id="skills" class="bg-paper-soft transition-colors dark:bg-night-soft">
    <div class="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
      <SectionHeading number="04" label="skills" title="The toolkit behind the automations" />

      <div class="mt-16 grid gap-16 md:grid-cols-2">
        <div v-for="(group, groupIndex) in skillGroups" :key="group.title" v-reveal="groupIndex * 120">
          <h3 class="font-display text-2xl font-medium tracking-tight text-ink dark:text-white">
            {{ group.title }}
          </h3>
          <ul class="mt-6">
            <li
              v-for="(skill, index) in group.skills"
              :key="skill"
              class="flex items-baseline gap-4 border-t border-ink/10 py-3.5 dark:border-white/10"
            >
              <span class="w-7 shrink-0 text-xs tracking-wide text-stone-400 tabular-nums dark:text-stone-600">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span class="font-medium text-stone-700 dark:text-stone-300">{{ skill }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
