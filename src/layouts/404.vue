<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <Header />
  <div class="box">
    <router-view />

    <div class="py-4" />

    <button class="btn" @click="router.back()">Back</button>
  </div>
  <Footer />
  <div class="mx-auto mt-4 text-center text-sm opacity-40">
    [404 Layout]
  </div>
</template>
