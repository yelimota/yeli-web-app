// ** Customize config build project

export default {

  // Define the workspace of Nuxt application
  rootDir: './',

  // Define the source directory of your Nuxt application.
  srcDir: 'src/',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Stylus file in the project
    '@/assets/stylus/main.styl'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    // your settings here
    stylus: [
      '@/assets/stylus/1-settings/*.styl'
    ]
  }
}
