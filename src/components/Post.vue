<template>
  <carbon-help class="text-4xl inline-block" />
  <h2 class="text-xl">{{ props.frontmatter.title }}</h2>

  <div class="py-4" />

  <slot />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { isClient, useEventListener } from '@vueuse/core'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props = defineProps<{ frontmatter: any }>()

const navigate = () => {
  if (window.location.hash) {
    document
      .querySelector(decodeURIComponent(window.location.hash))
      ?.scrollIntoView({ behavior: 'smooth' })
  }
}

if (isClient) {
  useEventListener(window, 'hashchange', navigate)

  onMounted(() => {
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>(
      'a[href^="#"]'
    )) {
      anchor.addEventListener('click', (evt) => {
        evt.preventDefault()
        window.history.replaceState({}, '', anchor.href)
        navigate()
      })
    }

    navigate()
    setTimeout(navigate, 500)
  })
}
</script>
