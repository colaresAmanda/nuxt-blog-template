// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-mongoose', '@sidebase/nuxt-auth'],
  
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },

  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {
    },
    modelsDir: 'models',
    devtools: true,
  },

  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs',
    },
  },

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
