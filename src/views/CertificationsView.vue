<script setup>
import { ArrowLeft, BadgeCheck } from 'lucide-vue-next'
import { certifications } from '@/data/certifications'
</script>

<template>
  <section class="mx-auto max-w-4xl px-6 pt-36 pb-28 sm:px-10">
    <RouterLink
      to="/"
      class="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors duration-300 hover:text-accent dark:text-stone-400 dark:hover:text-accent"
    >
      <ArrowLeft
        class="h-4 w-4 transition-transform duration-500 ease-lux group-hover:-translate-x-0.5"
        :stroke-width="1.5"
      />
      Back to home
    </RouterLink>

    <div v-reveal class="flex items-baseline gap-4">
      <span class="text-sm font-medium tracking-wide text-accent">05</span>
      <span class="font-display text-lg italic text-stone-500 dark:text-stone-400">credentials</span>
      <span aria-hidden="true" class="h-px flex-1 self-center bg-ink/10 dark:bg-white/10"></span>
    </div>
    <h1
      v-reveal
      class="mt-6 font-display text-4xl font-medium tracking-tight text-balance text-ink sm:text-5xl dark:text-white"
    >
      Certifications
    </h1>
    <p v-reveal="120" class="mt-6 max-w-xl leading-relaxed text-stone-600 dark:text-stone-400">
      Formal training that backs up the data and analytics work behind my automation projects.
    </p>

    <ul class="mt-16">
      <li
        v-for="(cert, index) in certifications"
        :key="cert.name"
        v-reveal="index * 100"
        class="border-t border-ink/10 py-10 dark:border-white/10"
      >
        <div class="grid gap-2 sm:grid-cols-12 sm:items-baseline">
          <span class="text-sm text-stone-400 tabular-nums sm:col-span-2 dark:text-stone-500">
            {{ cert.year }}
          </span>
          <div class="sm:col-span-7">
            <h2 class="font-display text-xl font-medium tracking-tight text-ink dark:text-white">
              {{ cert.name }}
            </h2>
            <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">{{ cert.issuer }}</p>
          </div>
          <p
            class="font-display text-sm italic sm:col-span-3 sm:text-right"
            :class="cert.status === 'Completed' ? 'text-stone-500 dark:text-stone-400' : 'text-accent'"
          >
            {{ cert.status }}
          </p>
        </div>
        <div v-if="cert.image" class="mt-6 sm:grid sm:grid-cols-12">
          <div class="sm:col-span-10 sm:col-start-3">
            <a
              :href="cert.verifyUrl"
              target="_blank"
              rel="noopener"
              class="group block"
              :aria-label="`Verify the ${cert.name} on Coursera`"
            >
              <img
                :src="cert.image"
                :alt="cert.imageAlt"
                loading="lazy"
                class="w-full rounded-lg border border-ink/10 shadow-sm transition-shadow duration-500 ease-lux group-hover:shadow-md dark:border-white/10"
              />
              <span
                class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors duration-300 group-hover:text-accent dark:text-stone-400"
              >
                <BadgeCheck class="h-4 w-4" :stroke-width="1.5" />
                Verify this certificate on Coursera
              </span>
            </a>
          </div>
        </div>
      </li>
      <li class="border-t border-ink/10 dark:border-white/10"></li>
    </ul>
  </section>
</template>
