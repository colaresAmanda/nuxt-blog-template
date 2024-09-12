// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-mongoose', '@sidebase/nuxt-auth', '@nuxt/ui'],
  
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },
  alias: {
    '#tailwind-config': './tailwind.config.js', // Adjust the path to your actual Tailwind config location
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