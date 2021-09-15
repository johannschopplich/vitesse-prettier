<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <Header />
  <div class="box">
    <router-view />

    <div class="py-4" />

    <button class="button" @click="router.back()">Back</button>
  </div>
  <Footer layout="404" />
</template>
