<template>
  <header class="w-full top-4 left-0 z-10 sticky">
    <nav class="flex flex-wrap gap-x-4 box align-middle">
      <router-link class="whitespace-nowrap hover:text-teal-600" to="/">
        <span class="icon-btn"><carbon-campsite /></span>
        Home
      </router-link>

      <router-link class="whitespace-nowrap hover:text-teal-600" to="/about">
        <span class="icon-btn"><carbon-dicom-overlay /></span>
        About
      </router-link>
    </nav>
  </header>
</template>
