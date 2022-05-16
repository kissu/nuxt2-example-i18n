export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'nuxt2-example-i18n',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    langDir: 'locales/',
    lazy: true,
    loadLanguagesAsync: true,
    locales: [
      {
        code: 'en',
        iso: 'en',
        file: 'en.json',
      },
      {
        code: 'fr',
        iso: 'fr',
        file: 'fr.json',
      },
    ],
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
}
