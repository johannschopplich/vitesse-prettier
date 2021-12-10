<template>
  <nav class="box flex flex-wrap space-x-4">
    <button
      class="cursor-pointer text-2xl hover:text-teal-600"
      aria-label="Toggle dark mode"
      @click="toggleDark()"
    >
      <carbon-moon
        v-if="isDark"
        class="icon-inline transition ease-in-out duration-200"
      />
      <carbon-sun
        v-else
        class="icon-inline transition ease-in-out duration-200"
      />
    </button>

    <a
      class="cursor-pointer text-current text-2xl"
      href="https://github.com/johannschopplich/vitesse-prettier"
      rel="noreferrer"
      target="_blank"
      title="GitHub"
    >
      <carbon-logo-github
        class="icon-inline transition ease-in-out duration-200"
      />
    </a>
  </nav>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>
