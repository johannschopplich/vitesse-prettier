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

<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p class="text-xl">
      Vitesse
    </p>
    <p class="text-sm opacity-75">
      Opinionated Vite Starter Template
    </p>

    <div class="py-4" />

    <div class="flex flex-wrap gap-2">
      <label for="input" hidden>What's your name?</label>
      <input
        id="input"
        v-model="name"
        placeholder="What's your name?"
        aria-label="What's your name?"
        type="text"
        autocomplete="false"
        class="
          bg-transparent
          border
          rounded
          outline-none
          border-gray-200
          w-full max-w-[250px]
          py-2
          px-3
          dark:border-gray-600 active:outline-none
        "
        @keydown.enter="go"
      />
  
      <div>
        <button class="btn" :disabled="!name" @click="go">Go</button>
      </div>      
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
