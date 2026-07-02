<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
</script>

<!-- The hero stays dark in both themes on purpose. -->
<template>
  <section class="relative overflow-hidden bg-night text-white">
    <!-- Ambient ember glow, kept faint so the type carries the section -->
    <div
      aria-hidden="true"
      class="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-[140px]"
    ></div>
    <div
      aria-hidden="true"
      class="absolute bottom-[-30%] left-[-15%] h-[28rem] w-[28rem] rounded-full bg-orange-900/20 blur-[120px]"
    ></div>

    <div
      class="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-6 pt-28 pb-16 sm:px-10"
    >
      <p v-reveal class="flex flex-wrap items-center gap-x-3 text-sm text-stone-400">
        <span class="font-medium tracking-wide text-stone-200">Raymond Gamiao</span>
        <span aria-hidden="true" class="text-stone-600">/</span>
        <span class="font-display text-base italic text-accent">AI-Powered Automation Engineer</span>
      </p>

      <h1
        v-reveal="120"
        class="mt-8 max-w-4xl font-display text-5xl font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl"
        style="line-height: 1.05"
      >
        I turn the workflows eating your week into systems that
        <em class="font-normal text-stone-400">run themselves.</em>
      </h1>

      <p v-reveal="240" class="mt-8 max-w-xl text-lg leading-relaxed text-stone-400">
        Support triage, reporting, and document handling, automated with AI for small businesses
        and lean teams.
      </p>

      <div v-reveal="360" class="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
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

      <div
        v-reveal="480"
        class="mt-auto flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-stone-500"
        style="margin-top: clamp(4rem, 10vh, 8rem)"
      >
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
        </span>
        Currently taking on new automation projects
      </div>
    </div>
  </section>
</template>
