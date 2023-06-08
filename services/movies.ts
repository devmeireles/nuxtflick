import { IMovie } from "~/types/IMove";

const getMovieByID = async (id: string): Promise<IMovie> => {
  return await $fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${useRuntimeConfig().TMDB_KEY}`,
      },
    }
  );
};

export { getMovieByID };
