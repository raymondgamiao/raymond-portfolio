<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
</script>

<template>
  <section id="about" class="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
    <SectionHeading
      number="01"
      label="about"
      title="I remove the busywork your team has learned to live with."
    />

    <div class="mt-12 grid gap-10 md:grid-cols-12">
      <div class="hidden md:col-span-4 md:block"></div>
      <div class="space-y-5 text-lg leading-relaxed text-stone-600 md:col-span-7 dark:text-stone-400">
        <p v-reveal>
          I design and build AI-powered automations that cut manual work out of support,
          reporting, and document handling. If your team is sorting the same emails every morning,
          copying data between tools, or rewriting the same report every week, that is exactly the
          kind of work I take off your plate.
        </p>
        <p v-reveal="120">
          By day I lead a data and analytics engineering team, so I know what it takes to ship
          systems people rely on. I bring that same standard to client work: practical automation
          that works on day one and keeps working after I hand it over.
        </p>
      </div>
    </div>
  </section>
</template>
