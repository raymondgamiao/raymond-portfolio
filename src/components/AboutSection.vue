<script setup>
import { Inbox, BarChart3, FileText } from 'lucide-vue-next'
import SectionHeading from '@/components/SectionHeading.vue'

const services = [
  { icon: Inbox, title: 'Support triage' },
  { icon: BarChart3, title: 'Reporting and dashboards' },
  { icon: FileText, title: 'Document processing' },
]
</script>

<template>
  <section id="about" class="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-28">
    <SectionHeading
      number="01"
      label="about"
      title="I remove the busywork your team has learned to live with."
    />

    <div class="mt-12 max-w-2xl space-y-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
      <p v-reveal>
        I build AI automations that take support triage, reporting, and document handling off
        your plate.
      </p>
      <p v-reveal="120">
        By day I lead a data and analytics engineering team, and client work gets the same
        standard: systems that work on day one and keep working.
      </p>
    </div>

    <div class="mt-14 grid gap-6 sm:grid-cols-3">
      <div
        v-for="(service, index) in services"
        :key="service.title"
        v-reveal="index * 120"
        class="group flex items-center gap-3 border-t border-ink/10 pt-4 dark:border-white/10"
      >
        <component
          :is="service.icon"
          class="h-5 w-5 text-stone-400 transition-colors duration-300 group-hover:text-accent"
          :stroke-width="1.5"
        />
        <span class="font-medium text-ink dark:text-white">{{ service.title }}</span>
      </div>
    </div>
  </section>
</template>
