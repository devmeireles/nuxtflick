import { IMovie } from '~/types/IMove';

const getMovieByID = async (id: string): Promise<IMovie> => {
  const config = useRuntimeConfig();
  const { TMDB_KEY } = config.public;

  return await $fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TMDB_KEY}`,
      },
    },
  );
};

const getPopularMovies = async (): Promise<IMovie[]> => {
  const config = useRuntimeConfig();
  const { TMDB_KEY } = config.public;

  const data: Record<string, any> = await $fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TMDB_KEY}`,
      },
    },
  );

  return data.results;
};

const getTopRatedMovies = async (): Promise<IMovie[]> => {
  const config = useRuntimeConfig();
  const { TMDB_KEY } = config.public;

  const data: Record<string, any> = await $fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TMDB_KEY}`,
      },
    },
  );

  return data.results;
};

const getNowPlayingMovies = async (): Promise<IMovie[]> => {
  const config = useRuntimeConfig();
  const { TMDB_KEY } = config.public;

  const data: Record<string, any> = await $fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TMDB_KEY}`,
      },
    },
  );

  return data.results;
};

const getUpcomingMovies = async (): Promise<IMovie[]> => {
  const config = useRuntimeConfig();
  const { TMDB_KEY } = config.public;

  const data: Record<string, any> = await $fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TMDB_KEY}`,
      },
    },
  );

  return data.results;
};

export {
  getMovieByID,
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
};
