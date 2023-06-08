<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { IMovie } from '~/types/IMove';

defineProps({
  data: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: false,
  }
});

const router = useRouter();

const pushToMovie = (movieID: number) => {
  router.push(`movies/${movieID}`)
}

const imageBackground = (movie: IMovie) => {
  return {
    'background-image': `url(${getPostFormat(movie)})`,
  };
};

const breakpoints = {
  700: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  920: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
  1280: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
}
</script>

<template>
  <div class="flex flex-col">
    <div v-if="title" class="">
      <h2 class="font-bold text-xl text-gray-100">{{ title }}</h2>
    </div>
    <Carousel :breakpoints="breakpoints">
      <Slide v-for="movie in data" :key="movie.id" class="text-start">
        <div class="movie-card w-full pr-2 py-4 h-[500px] mb-16 transition-all" @click="pushToMovie(movie.id)">
          <div class="movie-card__image h-full bg-cover bg-center bg-no-repeat rounded-xl cursor-pointer"
            :style="imageBackground(movie)">
            <div
              class="movie-card__image--overlay w-full h-[470px] rounded-xl flex justify-start items-start backdrop-brightness-75 hover:backdrop-brightness-125 transition-all ease-out duration-300">
            </div>
          </div>

          <div class="movie-card__data pl-1 pt-1">
            <div class="movie-card__data-title">
              <p class="text-[16px] font-semibold text-gray-300">{{ movie.title }}</p>
            </div>

            <div class="movie-card__data-title">
              <p class="text-[13px] text-gray-300">{{ movie.release_date }}</p>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation class="!bg-white !h-8 !w-8 !rounded-3xl" />
      </template>
    </Carousel>
  </div>
</template>