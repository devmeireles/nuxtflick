<script setup>


</script>

<template>
  <div class="nav-bar fixed flex flex-row items-center content-end w-full z-10 shadow-sm h-16 bg-white dark:bg-zinc-900">
    <ul class="flex flex-row pl-8 text-white">
      <li class="hover:font-semibold">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="px-4 hover:font-semibold">
        <NuxtLink to="/movies">Movies</NuxtLink>
      </li>
      <li class="hover:font-semibold">
        <NuxtLink to="/movies">TV Shows</NuxtLink>
      </li>
    </ul>
  </div>
</template>