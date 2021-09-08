<script setup lang="ts">
import { isDark, toggleDark } from '~/logic'
</script>

<template>
  <nav class="text-xl box">
    <button
      class="cursor-pointer mr-4 icon-inline icon-transition !outline-none"
      title="Toggle dark mode"
      @click="toggleDark()"
    >
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>

    <a
      class="cursor-pointer icon-inline icon-transition"
      rel="noreferrer"
      href="https://github.com/johannschopplich/vitesse-prettier"
      target="_blank"
      title="GitHub"
    >
      <carbon-logo-github />
    </a>
  </nav>
</template>
