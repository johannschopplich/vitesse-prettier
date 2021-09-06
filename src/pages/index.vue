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
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse"
        target="_blank"
      >
        Vitesse
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">Opinionated Vite Starter Template</em>
    </p>

    <div class="py-4" />

    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      aria-label="What's your name?"
      type="text"
      autocomplete="false"
      class="
        w-[250px]
        px-4
        py-2
        text-center
        bg-transparent
        border border-gray-200
        dark:border-gray-700
        rounded
        outline-none active:outline-none
      "
      @keydown.enter="go"
    />
    <label class="hidden" for="input">What's your name?</label>

    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">Go</button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
