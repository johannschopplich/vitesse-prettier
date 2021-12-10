<template>
  <div
    v-if="offlineReady || needRefresh"
    class="fixed right-4 bottom-4 bg-white dark:bg-gray-800 p-4 rounded shadow z-10"
    role="alert"
  >
    <div class="mb-2">
      <span v-if="offlineReady">App is ready to work offline.</span>
      <span v-else>New content available, reload to update.</span>
    </div>

    <div class="space-x-2">
      <button
        v-if="needRefresh"
        class="button py-1 px-3"
        @click="updateServiceWorker()"
      >
        Reload
      </button>
      <button class="button py-1 px-3" @click="close">Close</button>
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
