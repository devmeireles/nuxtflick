import { IMovie } from '~/types/IMove'

export const getBackdropFormat = (data: IMovie) => {
  const image = data.backdrop_path || data.poster_path
  return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${image}`
}
