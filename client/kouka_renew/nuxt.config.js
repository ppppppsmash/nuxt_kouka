import colors from 'vuetify/es5/util/colors'
// const environment = process.env.NODE_ENV || 'development';
// const envSet = require(`./api/env.${environment}.js`)

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - kouka_renew',
    title: 'kouka_renew',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Noto+Sans+JP:wght@300;400;500;700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  //localhostへアクセス時のデバッグ
  //https://qiita.com/arthur_foreign/items/bc87c9b66e7ea9710c6b
  css: [
    '~/assets/scss/basicstyle.min.css',
    '~/assets/scss/basicthema.scss',
    '~/assets/scss/main.scss',
    '~/assets/scss/contents.scss',
    '~/assets/scss/font-size--small.scss',
    '~/assets/scss/top.scss',
    '~/assets/scss/style.scss',
    '~/assets/scss/top.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  // nuxt/axios  https://axios.nuxtjs.org/usage
    // { 
    //   src: '~/plugins/axios.ts' 
    // }
    {
      src: '~/plugins/vue2-google-maps.js'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],

// telemetry: false,

server: {
  host: '0.0.0.0'
},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/axios']
  ],
  env: {
    // これを設定しないとNuxtでprocess.env.NODE_ENVを取得したときにデフォルトの値になってしまう
    NODE_ENV: process.env.NODE_ENV
  },


  axios: {
    baseURL: process.env.BASE_URL // Used as fallback if no runtime config is provided
  },

  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: process.env.BROWSER_BASE_URL
  //   }
  // },

  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: process.env.BROWSER_BASE_URL
  //   }
  // },

  // privateRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.BASE_URL
  //   }
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: true,
      themes: {
          dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  }
}
