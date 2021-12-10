<template>
  <main class="max-w-screen-md mx-auto py-4 px-4 space-y-4">
    <Header />

    <div class="box">
      <router-view />
    </div>

    <Footer />
  </main>

  <client-only>
    <ReloadPrompt />
  </client-only>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [{ name: 'description', content: 'Opinionated Vite Starter Template' }],
})
</script>
