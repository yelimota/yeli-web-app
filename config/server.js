// ** Customize config server

export default {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  // No server-side rendering (only client-side rendering)
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  // nuxt generate for static sites
  target: 'static',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Define the workspace of Nuxt application
  rootDir: './',

  // Define the source directory of your Nuxt application.
  srcDir: 'src/',

  // Nuxt lets you customize the CLI configuration.
  cli: {

    // Add a message to the CLI banner.
    badgeMessages: [
      '------------------------',
      'P R O J E C T  :',
      '',
      '➜ Yeli Web App v1.0',
      '-------------------------'
    ],

    // Change the color of the 'Nuxt' title in the CLI banner.
    bannerColor: 'magentaBright'
  }
}
