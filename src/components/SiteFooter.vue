<script setup>
const year = new Date().getFullYear()

const footerLinks = [
  { label: 'About', to: { path: '/', hash: '#about' } },
  { label: 'Services', to: { path: '/', hash: '#services' } },
  { label: 'Work', to: { path: '/', hash: '#work' } },
  { label: 'Contact', to: { path: '/', hash: '#contact' } },
  { label: 'Certifications', to: '/certifications' },
]
</script>

<template>
  <footer class="border-t border-ink/10 transition-colors dark:border-white/10">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 sm:flex-row sm:justify-between sm:px-10"
    >
      <p class="text-sm text-stone-500 dark:text-stone-400">
        &copy; {{ year }}
        <span class="font-display italic text-stone-600 dark:text-stone-300">Raymond Gamiao</span>
      </p>
      <nav class="flex flex-wrap justify-center gap-x-7 gap-y-2">
        <RouterLink
          v-for="link in footerLinks"
          :key="link.label"
          :to="link.to"
          class="text-sm text-stone-500 transition-colors duration-300 hover:text-accent dark:text-stone-400 dark:hover:text-accent"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </footer>
</template>
