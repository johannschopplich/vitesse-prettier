<template>
  <header class="w-full sticky top-4 left-0 z-10">
    <nav class="flex flex-wrap space-x-4 box">
      <router-link
        class="text-gray-800 hover:text-teal-600 whitespace-nowrap dark:text-white"
        to="/"
      >
        Home
      </router-link>

      <router-link
        class="text-gray-800 hover:text-teal-600 whitespace-nowrap dark:text-white"
        to="/about"
      >
        About
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
nav .router-link-active {
  text-decoration: underline;
}
</style>
