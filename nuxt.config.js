module.exports = {
  head: {
    title: 'Vue Vixens - Workshops for Foxy People to Learn Vue.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue Vixens - Workshops for Foxy People to Learn Vue.js' },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { name: 'theme-color', content: '#fff' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'icon', type: 'manifest', href: '/icons/site.webmanifest' },
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: [
    '~/plugins/vuetify',
    '~/plugins/eventBus.js',
    '~/plugins/i18n.js'
  ],
  css: [
    '~/assets/css/app.styl',
    'flag-icon-css/css/flag-icon.min.css'
  ],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-65309624-3'
    }]
  ],
  loading: { color: '#3B8070' },
  build: {
    vendor: ['vue-i18n'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
