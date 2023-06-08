import { SETTINGS } from '~/configs/consts'
import { IMovie } from '~/types/IMove'

export const buildMetaTags = (data: IMovie) => {
  return {
    title: `${SETTINGS.APP_NAME} - ${data.title}`,
    ogTitle: `${SETTINGS.APP_NAME} - ${data.title}`,
    description: data.overview,
    ogDescription: data.overview,
    ogImage: getBackdropFormat(data),
    twitterCard: 'summary_large_image'
  }
}
