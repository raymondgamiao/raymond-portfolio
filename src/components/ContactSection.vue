<script setup>
import { ref } from 'vue'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-vue-next'
import SectionHeading from '@/components/SectionHeading.vue'
import { socialLinks, formspreeId } from '@/data/site'

const submitting = ref(false)
const submitted = ref(false)
const errorMessage = ref('')

async function handleSubmit(event) {
  submitting.value = true
  errorMessage.value = ''
  try {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      body: new FormData(event.target),
      headers: { Accept: 'application/json' },
    })
    if (response.ok) {
      submitted.value = true
      event.target.reset()
    } else {
      errorMessage.value = 'Something went wrong sending your message. Please email me directly instead.'
    }
  } catch {
    errorMessage.value = 'Something went wrong sending your message. Please email me directly instead.'
  } finally {
    submitting.value = false
  }
}

const fieldClasses =
  'w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-lg text-ink transition-colors duration-300 placeholder:text-stone-400 focus:border-accent focus:ring-0 focus:outline-none dark:border-white/20 dark:text-white dark:placeholder:text-stone-600'
</script>

<template>
  <section id="contact" class="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
    <SectionHeading
      number="04"
      label="contact"
      title="Tell me about the workflow that's eating your time"
    />
    <p v-reveal class="mt-6 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
      Describe what your team repeats every week and I will give you an honest take on whether
      automation can fix it.
    </p>

    <div class="mt-16 grid gap-16 md:grid-cols-5">
      <form v-reveal class="md:col-span-3" @submit.prevent="handleSubmit">
        <div v-if="submitted" class="border-l-2 border-accent pl-6">
          <p class="font-display text-xl text-ink dark:text-white">
            Thanks, your message is on its way.
          </p>
          <p class="mt-2 text-stone-600 dark:text-stone-400">
            I usually reply within one business day.
          </p>
        </div>
        <div v-else class="space-y-8">
          <div>
            <label
              for="name"
              class="mb-1 block font-display text-sm italic text-stone-500 dark:text-stone-400"
            >
              Name
            </label>
            <input id="name" name="name" type="text" required autocomplete="name" :class="fieldClasses" />
          </div>
          <div>
            <label
              for="email"
              class="mb-1 block font-display text-sm italic text-stone-500 dark:text-stone-400"
            >
              Email
            </label>
            <input id="email" name="email" type="email" required autocomplete="email" :class="fieldClasses" />
          </div>
          <div>
            <label
              for="message"
              class="mb-1 block font-display text-sm italic text-stone-500 dark:text-stone-400"
            >
              What's eating your time?
            </label>
            <textarea id="message" name="message" rows="4" required :class="fieldClasses"></textarea>
          </div>
          <p v-if="errorMessage" class="text-sm text-accent">
            {{ errorMessage }}
          </p>
          <button
            type="submit"
            :disabled="submitting"
            class="group inline-flex items-center gap-3 rounded-full bg-accent py-2 pr-2 pl-6 font-medium text-white transition-all duration-500 ease-lux hover:bg-accent-hover active:scale-[0.98] disabled:opacity-60"
          >
            {{ submitting ? 'Sending...' : 'Send Message' }}
            <span
              class="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-lux group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <ArrowUpRight class="h-4 w-4" :stroke-width="1.75" />
            </span>
          </button>
        </div>
      </form>

      <div v-reveal="150" class="md:col-span-2">
        <h3 class="font-display text-xl font-medium tracking-tight text-ink dark:text-white">
          Prefer to reach out directly?
        </h3>
        <!-- Update these links in src/data/site.js before going live. -->
        <ul class="mt-6">
          <li class="border-t border-ink/10 dark:border-white/10">
            <a
              :href="`mailto:${socialLinks.email}`"
              class="flex items-center gap-3 py-4 text-stone-600 transition-colors duration-300 hover:text-accent dark:text-stone-400 dark:hover:text-accent"
            >
              <Mail class="h-5 w-5" :stroke-width="1.25" />
              {{ socialLinks.email }}
            </a>
          </li>
          <li class="border-t border-ink/10 dark:border-white/10">
            <a
              :href="socialLinks.github"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-3 py-4 text-stone-600 transition-colors duration-300 hover:text-accent dark:text-stone-400 dark:hover:text-accent"
            >
              <Github class="h-5 w-5" :stroke-width="1.25" />
              GitHub
            </a>
          </li>
          <li class="border-y border-ink/10 dark:border-white/10">
            <a
              :href="socialLinks.linkedin"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-3 py-4 text-stone-600 transition-colors duration-300 hover:text-accent dark:text-stone-400 dark:hover:text-accent"
            >
              <Linkedin class="h-5 w-5" :stroke-width="1.25" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
