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
      <p class="text-sm mt-4">
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
        class="btn m-3 text-sm mt-6"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>
