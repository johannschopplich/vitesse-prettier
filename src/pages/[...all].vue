<template>
  <carbon-warning class="text-4xl inline-block" />
  <h2 class="text-xl">Not Found</h2>

  <div class="py-4" />

  <button class="button" @click="router.back()">Back</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
