<template>
  <carbon-help class="text-4xl inline-block" />
  <h2 class="text-xl">{{ props.frontmatter.title }}</h2>

  <div class="py-4" />

  <section ref="content">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { isClient, useEventListener } from '@vueuse/core'
import { useRouter } from 'vue-router'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props = defineProps<{ frontmatter: any }>()

const content = ref<HTMLElement>()
const router = useRouter()

if (isClient) {
  const navigate = () => {
    if (window.location.hash) {
      document
        .querySelector(decodeURIComponent(window.location.hash))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleAnchors = (
    event: MouseEvent & {
      target: HTMLElement
    }
  ) => {
    const link = event.target.closest('a')

    if (
      !event.defaultPrevented &&
      link &&
      event.button === 0 &&
      link.target !== '_blank' &&
      link.rel !== 'external' &&
      !link.download &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey
    ) {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin) return

      event.preventDefault()
      const { hash, pathname: path } = url
      if (hash && !path) {
        window.history.replaceState({}, '', link.href)
        navigate()
      } else {
        router.push({ path, hash })
      }
    }
  }

  useEventListener(window, 'hashchange', navigate)
  useEventListener(content, 'click', handleAnchors)

  onMounted(() => {
    navigate()
    setTimeout(navigate, 500)
  })
}
</script>
