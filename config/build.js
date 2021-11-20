// ** Customize config build project
import Server from './server'
export default {

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cssSourceMap: process.env.NODE_ENV === 'development',
    devtools: process.env.NODE_ENV === 'development',
    extractCSS: process.env.NODE_ENV === 'production',
    publicPath: process.env.NODE_ENV === 'development' ? '/_nuxt/' : '/',
    filenames: {
      // [path][contenthash][name].[ext]
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[name].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash:7].js',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash:7].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    ['@nuxtjs/router',
      {
        path: `${Server.srcDir}router/`,
        fileName: 'index.js'
      }
    ]
  ]
}
