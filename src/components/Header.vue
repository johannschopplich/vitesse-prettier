<template>
  <header class="w-full top-4 left-0 z-10 sticky">
    <nav class="flex flex-wrap gap-x-4 box align-middle">
      <router-link class="header-link" to="/">
        <carbon-campsite class="icon-inline" aria-hidden="true" />
        Home
      </router-link>

      <router-link class="header-link" to="/about">
        <carbon-dicom-overlay class="icon-inline" aria-hidden="true" />
        About
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
.header-link {
  @apply whitespace-nowrap hover:text-teal-600;

  &.router-link-active {
    @apply text-teal-600;
  }
}
</style>
