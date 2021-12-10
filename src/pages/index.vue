<template>
  <div>
    <carbon-sailboat-offshore class="inline-block text-4xl" />
    <h2 class="text-xl">Vitesse</h2>
    <p class="text-sm opacity-75">Opinionated Vite Starter Template</p>

    <div class="my-4" />

    <form class="max-w-sm w-full flex space-x-3">
      <label for="input" hidden>What’s your name?</label>
      <input
        id="input"
        v-model="name"
        placeholder="What’s your name?"
        type="text"
        autocomplete="false"
        class="input flex-1"
        @keydown.enter="go"
      />

      <button class="button" :disabled="!name" @click.prevent="go">Go</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>
