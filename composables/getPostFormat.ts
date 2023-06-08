import { IMovie } from '~/types/IMove';

export const getPostFormat = (data: IMovie) => {
  const image = data.poster_path || data.backdrop_path;
  return `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${image}`;
};
