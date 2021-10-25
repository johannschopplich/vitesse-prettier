<template>
  <div
    v-if="offlineReady || needRefresh"
    class="bg-white rounded p-4 bottom-2 right-2 fixed z-10"
    role="alert"
  >
    <div class="mb-2">
      <span v-if="offlineReady">App is ready to work offline.</span>
      <span v-else>New content available, reload to update.</span>
    </div>
    <button
      v-if="needRefresh"
      class="button py-1 px-3"
      @click="updateServiceWorker()"
    >
      Reload
    </button>
    <button class="button py-1 px-3" @click="close">Close</button>
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
