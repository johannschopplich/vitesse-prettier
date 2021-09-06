<script setup lang="ts">
import { isDark, toggleDark } from '~/logic'
</script>

<template>
  <nav class="mt-6 text-xl">
    <router-link class="mx-2 icon-btn" to="/" title="Home">
      <carbon-campsite />
    </router-link>

    <button
      class="mx-2 icon-btn !outline-none"
      title="Toggle dark mode"
      @click="toggleDark()"
    >
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>

    <router-link class="mx-2 icon-btn" to="/about" title="About">
      <carbon-dicom-overlay />
    </router-link>

    <a
      class="mx-2 icon-btn"
      rel="noreferrer"
      href="https://github.com/antfu/vitesse"
      target="_blank"
      title="GitHub"
    >
      <carbon-logo-github />
    </a>
  </nav>
</template>
