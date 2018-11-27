module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Веб-студия "Souris". Создание сайтов, разработка визиток и логотипов',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Веб-студия "Souris". Занимаемся разработкой и продвижением сайтов. Оформлением и продевижением социальных сетей. Разработкой логотипа, визиток, фирменого стиля и бренда.' },
      { hid: 'og:locale', name: 'og:locale', content: 'ru_RU'},
      { hid: 'og:type', name: 'og:type', content: 'article'},
      { hid: 'og:title', name: 'og:title', content: 'Веб-студия "Souris". Создание сайтов, разработка визиток и логотипов'},
      { hid: 'og:description', name: 'og:description', content: 'Веб-студия "Souris". Занимаемся разработкой и продвижением сайтов. Оформлением и продвижением социальных сетей. Разработкой логотипа, визиток, фирменого стиля и бренда.'},
      { hid: 'og:image', name: 'og:image', content: '/image.jpg'},
      { hid: 'og:site_name', name: 'og:site_name', content: 'Веб-студия "Souris"'},
      { hid: 'name', name: 'name', content: 'Веб-студия "Souris". Создание сайтов, разработка визиток и логотипов'},
      { hid: 'description', name: 'description', content: 'Веб-студия "Souris". Занимаемся разработкой и продвижением сайтов. Оформлением и продвижением социальных сетей. Разработкой логотипа, визиток, фирменого стиля и бренда.'},
      { hid: 'image', name: 'image', content: '/image.jpg'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css', integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU', crossOrigin: 'anonymous'},

    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: 'components/Loader.vue',
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-link'
  },
  css: [
    { src: '~/assets/sass/styles.sass', lang: 'sass' },
  ],
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    [
      'nuxt-validate', {
      lang: 'ru'
    }
    ],
    ['nuxt-sass-resources-loader', {
      resources: [
        '~/assets/sass/vars/**/*.sass',
        '~/assets/sass/mixins/**/*.sass',
      ]
      }
    ]
  ],
  axios: {
    host: process.env.NODE_ENV == 'production' ? 'api.web-souris.ru' : 'localhost',
    port: process.env.NODE_ENV == 'production' ? '443' : '3001',
    https: process.env.NODE_ENV == 'production'
  },
  plugins: [
    '~/plugins/axios',
    '~/plugins/popup',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
    }
  }
}

