<script setup>
defineProps({
  number: { type: String, required: true },
  label: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <div v-reveal>
    <div class="flex items-baseline gap-4">
      <span class="text-sm font-medium tracking-wide text-accent">{{ number }}</span>
      <span class="font-display text-lg italic text-stone-500 dark:text-stone-400">
        {{ label }}
      </span>
      <span aria-hidden="true" class="h-px flex-1 self-center bg-ink/10 dark:bg-white/10"></span>
    </div>
    <h2
      class="mt-6 max-w-2xl font-display text-4xl font-medium tracking-tight text-balance text-ink sm:text-5xl dark:text-white"
    >
      {{ title }}
    </h2>
  </div>
</template>
