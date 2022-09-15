export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wincognito - Sichere Software-Lösungen mit Wert auf Datenschutz und Datensicherheit',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Schlanke, robuste Software-Lösungen mit Augenmerk auf Datenschutz und Datensicherheit.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/bootstrap/css/bootstrap.min.css",
    "~assets/css/fonts1.css",
    "~assets/css/fonts2.css",    
    "~assets/fonts/font-awesome.min.css",
    "~assets/css/Highlight-Clean.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/bootstrap-studio.client.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-purgecss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  i18n: {
      locales: ['de'],
      defaultLocale: 'de',
      vueI18n: {
        fallbackLocale: 'de',
      }
    },
  // https://purgecss.com/guides/nuxt.html
  purgeCSS: {
    // your settings here
    whitelist: ['nuxt-link-exact-active','nuxt-link-active','h1', 'h2','h3','h4','h5','h6']
   }
}
