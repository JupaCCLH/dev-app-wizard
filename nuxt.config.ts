// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // extends: ['../app-Master'],
  modules: [
    '@pinia/nuxt',

],
  pinia: {
    autoImports: ['defineStore']
  },
  imports: {
    dirs: ['stores']
  },
  devtools: { enabled: true }
})
