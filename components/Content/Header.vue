<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const imageBackground = computed(() => {
  return {
    'background-image': `url(${props.image})`,
  };
});
</script>

<template>
  <div
    class="movie-header min-w-full h-full md:h-screen bg-no-repeat bg-center bg-cover bg-fixed"
    :style="imageBackground"
  >
    <div
      class="w-full h-full flex justify-start items-start bg-gradient-to-r from-black to-transparent backdrop-brightness-50 backdrop-blur-[3px]"
    >
      <div
        class="movie-header__data w-12/12 lg:w-8/12 pt-6 pl-6 md:pt-24 md:pl-16"
      >
        <div class="movie-header__data-title w-10/12">
          <h1 class="font-bold text-4xl md:text-6xl text-white">
            {{ title }}
          </h1>
        </div>

        <div class="movie-header__data-meta flex flex-row pt-6 pb-3">
          <ContentMeta :rate="rate" :year="year" :duration="duration" />
        </div>

        <div class="movie-header__data-description w-11/12">
          <p class="font-normal text-base text-gray-300">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
