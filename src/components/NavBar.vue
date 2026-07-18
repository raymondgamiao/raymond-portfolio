<script setup>
import { ref } from 'vue'
import { Sun, Moon, Menu, X } from 'lucide-vue-next'
import { useThemeStore } from '@/stores/theme'
import { resumeAvailable } from '@/data/site'

const theme = useThemeStore()
const menuOpen = ref(false)

const sectionLinks = [
  { label: 'About', hash: '#about' },
  { label: 'Work', hash: '#work' },
  { label: 'Skills', hash: '#skills' },
  { label: 'Contact', hash: '#contact' },
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-ink/8 bg-paper/85 backdrop-blur-md transition-colors dark:border-white/10 dark:bg-night/85"
  >
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
      <RouterLink
        to="/"
        class="font-display text-lg font-semibold tracking-tight text-ink dark:text-white"
        @click="closeMenu"
      >
        Raymond Gamiao<span class="text-accent">.</span>
      </RouterLink>

      <div class="hidden items-center gap-7 md:flex">
        <RouterLink
          v-for="link in sectionLinks"
          :key="link.hash"
          :to="{ path: '/', hash: link.hash }"
          class="text-sm font-medium text-stone-600 transition-colors duration-300 hover:text-accent dark:text-stone-400 dark:hover:text-accent"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink
          to="/certifications"
          class="text-sm font-medium text-stone-600 transition-colors duration-300 hover:text-accent dark:text-stone-400 dark:hover:text-accent [&.router-link-active]:text-accent"
        >
          Certifications
        </RouterLink>
        <a
          v-if="resumeAvailable"
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          class="text-sm font-medium text-stone-600 transition-colors duration-300 hover:text-accent dark:text-stone-400 dark:hover:text-accent"
        >
          Resume
        </a>
        <button
          type="button"
          class="flex items-center gap-2 rounded-full border border-ink/15 px-3.5 py-1.5 text-sm font-medium text-stone-600 transition-all duration-300 ease-lux hover:border-accent hover:text-accent active:scale-[0.97] dark:border-white/15 dark:text-stone-400 dark:hover:border-accent dark:hover:text-accent"
          :aria-label="`Switch to ${theme.isDark ? 'light' : 'dark'} mode`"
          @click="theme.toggle()"
        >
          <Moon v-if="theme.isDark" class="h-4 w-4" :stroke-width="1.5" />
          <Sun v-else class="h-4 w-4" :stroke-width="1.5" />
          {{ theme.label }}
        </button>
      </div>

      <button
        type="button"
        class="text-ink md:hidden dark:text-stone-300"
        aria-label="Toggle navigation menu"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" class="h-6 w-6" :stroke-width="1.5" />
        <Menu v-else class="h-6 w-6" :stroke-width="1.5" />
      </button>
    </nav>

    <div
      v-if="menuOpen"
      class="border-t border-ink/8 bg-paper px-6 py-5 md:hidden dark:border-white/10 dark:bg-night"
    >
      <div class="flex flex-col gap-4">
        <RouterLink
          v-for="link in sectionLinks"
          :key="link.hash"
          :to="{ path: '/', hash: link.hash }"
          class="text-sm font-medium text-stone-600 dark:text-stone-400"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink
          to="/certifications"
          class="text-sm font-medium text-stone-600 dark:text-stone-400"
          @click="closeMenu"
        >
          Certifications
        </RouterLink>
        <a
          v-if="resumeAvailable"
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          class="text-sm font-medium text-stone-600 dark:text-stone-400"
          @click="closeMenu"
        >
          Resume
        </a>
        <button
          type="button"
          class="flex w-fit items-center gap-2 rounded-full border border-ink/15 px-3.5 py-1.5 text-sm font-medium text-stone-600 dark:border-white/15 dark:text-stone-400"
          @click="theme.toggle()"
        >
          <Moon v-if="theme.isDark" class="h-4 w-4" :stroke-width="1.5" />
          <Sun v-else class="h-4 w-4" :stroke-width="1.5" />
          {{ theme.label }} mode
        </button>
      </div>
    </div>
  </header>
</template>
