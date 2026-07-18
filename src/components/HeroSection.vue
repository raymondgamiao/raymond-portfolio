<script setup>
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-vue-next'
import { socialLinks } from '@/data/site'

// Drop the real photo at src/assets/portrait.jpg (or .jpeg/.png/.webp) and it
// replaces the monogram placeholder automatically on the next build.
const portraits = import.meta.glob('@/assets/portrait.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
})
const portraitUrl = Object.values(portraits)[0] ?? null
</script>

<!-- The hero stays dark in both themes on purpose. -->
<template>
  <section class="relative overflow-hidden bg-night text-white">
    <!-- Ambient ember glow, kept faint so the portrait and name carry the section -->
    <div
      aria-hidden="true"
      class="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-[140px]"
    ></div>
    <div
      aria-hidden="true"
      class="absolute bottom-[-30%] left-[-15%] h-[28rem] w-[28rem] rounded-full bg-orange-900/20 blur-[120px]"
    ></div>

    <div
      class="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col items-center justify-center px-6 pt-28 pb-16 text-center sm:px-10"
    >
      <div v-reveal class="relative">
        <template v-if="portraitUrl">
          <div
            aria-hidden="true"
            class="absolute inset-0 scale-125 rounded-full bg-accent/20 blur-3xl"
          ></div>
          <img
            :src="portraitUrl"
            alt="Portrait of Raymond Gamiao"
            class="relative aspect-[4/5] w-44 rounded-3xl object-cover ring-1 ring-white/15 sm:w-52"
          />
        </template>
        <template v-else>
          <div
            aria-hidden="true"
            class="absolute inset-0 scale-125 rounded-full bg-accent/20 blur-3xl"
          ></div>
          <div
            class="relative flex aspect-[4/5] w-44 items-center justify-center rounded-3xl bg-gradient-to-br from-night-soft to-night ring-1 ring-white/15 sm:w-52"
          >
            <span class="font-display text-6xl font-medium italic text-accent">RG</span>
          </div>
        </template>
      </div>

      <p
        v-reveal="100"
        class="mt-10 flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-1.5 text-sm text-stone-300"
      >
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
        </span>
        Taking on new automation projects
      </p>

      <h1
        v-reveal="200"
        class="mt-6 font-display text-5xl font-medium tracking-tight text-balance sm:text-7xl lg:text-8xl"
        style="line-height: 1.05"
      >
        Raymond Gamiao<span class="text-accent">.</span>
      </h1>

      <p v-reveal="300" class="mt-6 max-w-xl text-lg leading-relaxed text-stone-400">
        I build AI automations that give small teams their week back.
      </p>

      <div v-reveal="400" class="mt-8 flex items-center gap-3">
        <a
          :href="socialLinks.github"
          target="_blank"
          rel="noopener"
          aria-label="Raymond on GitHub"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-stone-300 transition-all duration-300 ease-lux hover:border-accent hover:text-white"
        >
          <Github class="h-5 w-5" :stroke-width="1.5" />
        </a>
        <a
          :href="socialLinks.linkedin"
          target="_blank"
          rel="noopener"
          aria-label="Raymond on LinkedIn"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-stone-300 transition-all duration-300 ease-lux hover:border-accent hover:text-white"
        >
          <Linkedin class="h-5 w-5" :stroke-width="1.5" />
        </a>
        <a
          :href="`mailto:${socialLinks.email}`"
          aria-label="Email Raymond"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-stone-300 transition-all duration-300 ease-lux hover:border-accent hover:text-white"
        >
          <Mail class="h-5 w-5" :stroke-width="1.5" />
        </a>
      </div>

      <div v-reveal="500" class="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <RouterLink
          :to="{ path: '/', hash: '#work' }"
          class="group inline-flex w-fit items-center gap-3 rounded-full bg-accent py-2 pr-2 pl-6 font-medium text-white transition-all duration-500 ease-lux hover:bg-accent-hover active:scale-[0.98]"
        >
          View My Work
          <span
            class="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-lux group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <ArrowUpRight class="h-4 w-4" :stroke-width="1.75" />
          </span>
        </RouterLink>
        <RouterLink
          :to="{ path: '/', hash: '#contact' }"
          class="inline-flex w-fit items-center px-2 py-3 font-medium text-stone-300 underline decoration-stone-600 underline-offset-8 transition-colors duration-300 hover:text-white hover:decoration-accent"
        >
          Let's Talk
        </RouterLink>
      </div>
    </div>
  </section>
</template>
