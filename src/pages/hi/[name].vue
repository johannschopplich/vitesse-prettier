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

<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      Hi, {{ props.name }}!
    </p>

    <p class="text-sm opacity-50">
      <em>Demo of dynamic route</em>
    </p>

    <template v-if="user.otherNames.length">
      <p class="mt-4 text-sm">
        <span class="opacity-75">Also known as:</span>
        <ul>
          <li v-for="n in user.otherNames" :key="n">
            <router-link :to="`/hi/${n}`" replace>
              {{ n }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <div>
      <button
        class="m-3 mt-6 text-sm btn"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>
