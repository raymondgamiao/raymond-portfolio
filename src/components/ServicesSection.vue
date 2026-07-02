<script setup>
import { Inbox, BarChart3, FileText, ArrowUpRight } from 'lucide-vue-next'
import SectionHeading from '@/components/SectionHeading.vue'

const services = [
  {
    number: '01',
    title: 'AI Support and Ticket Triage',
    description:
      'Incoming tickets get classified, routed, and given a first-pass investigation before anyone on your team touches them. Your people start every ticket with context instead of a cold queue, and customers get answers faster.',
    icon: Inbox,
  },
  {
    number: '02',
    title: 'Reporting Dashboards with AI Summaries',
    description:
      'Dashboards that explain themselves. Instead of charts your team has to interpret, you get plain-language summaries of what changed, why it matters, and what to look at next.',
    icon: BarChart3,
  },
  {
    number: '03',
    title: 'Document and Email Processing Automation',
    description:
      'The information trapped in your inbox, PDFs, and attachments gets extracted, organized, and acted on automatically. No more retyping, forwarding, and filing by hand.',
    icon: FileText,
  },
]
</script>

<template>
  <section id="services" class="bg-paper-soft transition-colors dark:bg-night-soft">
    <div class="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
      <SectionHeading number="02" label="services" title="Three ways I give your team its time back" />

      <div class="mt-16">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          v-reveal="index * 100"
          class="group grid gap-6 border-t border-ink/10 py-10 transition-colors duration-500 md:grid-cols-12 md:items-start dark:border-white/10"
        >
          <span
            class="font-display text-2xl text-stone-400 transition-colors duration-500 group-hover:text-accent md:col-span-1 dark:text-stone-600"
          >
            {{ service.number }}
          </span>
          <h3
            class="font-display text-2xl font-medium tracking-tight text-ink md:col-span-4 dark:text-white"
          >
            {{ service.title }}
          </h3>
          <p class="leading-relaxed text-stone-600 md:col-span-6 dark:text-stone-400">
            {{ service.description }}
          </p>
          <div class="hidden justify-end md:col-span-1 md:flex">
            <component
              :is="service.icon"
              class="h-6 w-6 text-stone-400 transition-all duration-500 ease-lux group-hover:-translate-y-1 group-hover:text-accent dark:text-stone-600"
              :stroke-width="1.25"
            />
          </div>
        </div>
        <div class="border-t border-ink/10 dark:border-white/10"></div>
      </div>

      <p v-reveal class="mt-14 max-w-2xl text-lg text-stone-600 dark:text-stone-400">
        Not sure which of these fits your situation?
        <RouterLink
          :to="{ path: '/', hash: '#contact' }"
          class="group inline-flex items-center gap-1 font-medium text-accent"
        >
          <span class="underline decoration-accent/40 underline-offset-4 transition-colors duration-300 group-hover:decoration-accent">
            Book a free scoping call
          </span>
          <ArrowUpRight
            class="h-4 w-4 transition-transform duration-500 ease-lux group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            :stroke-width="1.5"
          />
        </RouterLink>
        through the contact form and we'll figure it out together.
      </p>
    </div>
  </section>
</template>
