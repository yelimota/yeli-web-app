// ** Customize config build project
import Server from './server'
export default {

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
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
