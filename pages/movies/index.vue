<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '~/services/movies';

definePageMeta({
  name: 'MoviesHome',
});

const popularMovies = await getPopularMovies()
const topRatedMovies = await getTopRatedMovies();
const nowPlayingMovies = await getNowPlayingMovies();
const upcomingMovies = await getUpcomingMovies();

const popularMoviesIDs = popularMovies.map(item => item.id);
const topRatedMoviesIDs = topRatedMovies.map(item => item.id);
const nowPlayingMoviesIDs = nowPlayingMovies.map(item => item.id);

const cleanTopRatedMovies = removeDuplicatedMovieFromArray([...popularMoviesIDs, ...nowPlayingMoviesIDs], topRatedMovies, 'id');
const cleanNowPlayingMovies = removeDuplicatedMovieFromArray([...popularMoviesIDs, ...topRatedMoviesIDs], nowPlayingMovies, 'id');
const cleanUpcomingMovies = removeDuplicatedMovieFromArray([...popularMoviesIDs, ...topRatedMoviesIDs, ...nowPlayingMoviesIDs], upcomingMovies, 'id');

</script>

<template>
  <div class="px-4 py-2 md:px-8 md:py-4">
    <div class="pt-4">
      <SectionMoviesCarousel :data="popularMovies" title="Trending Movies" />
    </div>

    <div class="pt-4">
      <SectionMoviesCarousel :data="cleanTopRatedMovies" title="Top Rated Movies" />
    </div>

    <div class="pt-4">
      <SectionMoviesCarousel :data="cleanNowPlayingMovies" title="Now Playing Movies" />
    </div>

    <div class="pt-4">
      <SectionMoviesCarousel :data="cleanUpcomingMovies" title="Upcoming Movies" />
    </div>
  </div>
</template>