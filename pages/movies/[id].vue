<script setup>
import { getMovieByID } from '~/services/movies';
const route = useRoute();

definePageMeta({
  name: 'MovieByID',
});

const movieID = route.params.id;
const data = await getMovieByID(movieID);

const movie = {
  title: data.original_title,
  duration: data.runtime,
  description: data.overview,
  rate: data.vote_average,
  year: data.release_date,
  image: getBackdropFormat(data),
};

useSeoMeta(buildMovieMetaTags(data));
</script>

<template>
  <div class="movie">
    <ContentHeader
      :title="movie.title"
      :description="movie.description"
      :year="movie.year"
      :duration="movie.duration"
      :rate="movie.rate"
      :image="movie.image"
    />
  </div>
</template>
