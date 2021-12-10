<template>
  <carbon-warning class="inline-block text-4xl" />
  <h2 class="text-xl">Not Found</h2>

  <div class="my-4" />

  <button class="button" @click="router.back()">Back</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
