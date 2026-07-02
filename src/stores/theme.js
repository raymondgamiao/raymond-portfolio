import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useColorMode } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
  // Follows the visitor's system preference on first visit,
  // then persists whatever they pick with the toggle.
  const mode = useColorMode()

  const isDark = computed(() => mode.value === 'dark')
  const label = computed(() => (isDark.value ? 'Dark' : 'Light'))

  function toggle() {
    mode.value = isDark.value ? 'light' : 'dark'
  }

  return { mode, isDark, label, toggle }
})
