<script setup lang="ts">
import { isDark, toggleDark } from '~/logic'
</script>

<template>
  <nav class="flex flex-wrap space-x-4 box">
    <button
      class="cursor-pointer text-2xl hover:text-teal-600"
      title="Toggle dark mode"
      @click="toggleDark()"
    >
      <carbon-moon v-if="isDark" class="icon-inline icon-transition" />
      <carbon-sun v-else class="icon-inline icon-transition" />
    </button>

    <a
      class="cursor-pointer text-2xl text-[currentColor]"
      rel="noreferrer"
      href="https://github.com/johannschopplich/vitesse-prettier"
      target="_blank"
      title="GitHub"
    >
      <carbon-logo-github class="icon-inline icon-transition" />
    </a>
  </nav>
</template>
