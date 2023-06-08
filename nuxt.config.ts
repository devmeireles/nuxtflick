// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'path';
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    '@': resolve(__dirname, '/'),
  },

  css: ['~/assets/main.scss'],

  runtimeConfig: {
    public: {
      TMDB_KEY: process.env.TMDB_KEY,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    typeCheck: true,
  },

  modules: ['@pinia/nuxt', 'nuxt-icon'],
});
