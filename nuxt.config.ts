// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        file: 'zh.js',
      },
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    vueI18n: {
      legacy: false,
      fallbackLocale: 'en',
    },
  },
});
