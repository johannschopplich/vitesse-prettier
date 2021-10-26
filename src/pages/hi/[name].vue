<template>
  <div>
    <carbon-pedestrian class="text-4xl inline-block" />
    <h2 class="text-xl">Hi, {{ props.name }}!</h2>
    <p class="text-sm opacity-75">Demo of a dynamic route</p>

    <template v-if="user.otherNames.length">
      <div class="mt-4 text-sm">
        <p class="opacity-75">Also known as:</p>
        <ul>
          <li v-for="n in user.otherNames" :key="n">
            <router-link :to="`/hi/${n}`" replace>
              {{ n }}
            </router-link>
          </li>
        </ul>
      </div>
    </template>

    <div class="py-4" />

    <button class="button" @click="router.back()">Back</button>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'

const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>
