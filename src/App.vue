<script setup>
import NavBar from '@/components/NavBar.vue'
import SiteFooter from '@/components/SiteFooter.vue'

// Fine SVG noise, tiled as a fixed overlay to give the flat surfaces a paper feel.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 z-40 opacity-[0.035] mix-blend-multiply dark:opacity-[0.05] dark:mix-blend-screen"
      :style="{ backgroundImage: grain }"
    ></div>
    <NavBar />
    <main class="flex-1">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
