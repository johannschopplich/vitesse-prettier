<template>
  <div
    v-if="offlineReady || needRefresh"
    class="
      bg-white
      rounded
      shadow
      p-4
      right-4
      bottom-4
      z-10
      fixed
      dark:bg-gray-800
    "
    role="alert"
  >
    <div class="mb-2">
      <span v-if="offlineReady">App is ready to work offline.</span>
      <span v-else>New content available, reload to update.</span>
    </div>

    <div class="space-x-2">
      <button
        v-if="needRefresh"
        class="py-1 px-3 button"
        @click="updateServiceWorker()"
      >
        Reload
      </button>
      <button v-else class="py-1 px-3 button" @click="close">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()

const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}
</script>
