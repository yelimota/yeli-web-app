// ** Customize config server

export default {
  // No server-side rendering (only client-side rendering)
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  // nuxt generate for static sites
  target: 'static',

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

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
