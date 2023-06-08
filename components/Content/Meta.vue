<script setup>

defineProps({
  rate: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="movie-header__data-meta-review flex flex-row pr-2">
    <ContentRate :rate="rate" />
  </div>

  <div class="movie-header__data-meta-data flex flex-row">
    <div class="pl-2">
      <p class="font-normal text-base text-gray-300">
        {{ year }}
      </p>
    </div>

    <div class="px-4">
      <p class="font-normal text-base text-gray-300">
        {{ duration }} Minutes
      </p>
    </div>
  </div>
</template>
