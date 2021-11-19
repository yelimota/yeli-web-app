# Nuxt Configuration

Directory with the configurations of the Nuxt file `/nuxt.config.js`

## Additional Dependencies

Additional dependencies to nuxt default settings

### #01 - Pug

> You only need to install the dependency

```bash
yarn add -D pug pug-plain-loader
```

### #02 - Stylus

> Because Nuxt-edge is not stable yet, it is necessary to install an older version of `stylus-loader v3.0.2`, since the latest versions cause some errors.

```bash
# install dependency
yarn add -D stylus stylus-loader@3.0.2
```

`package.json`

```json
{
  "devDependencies": {
    "stylus-loader": "^3.0.2"
  }
}
```

### #03 - Style Resources

[🔗 **Github**](https://github.com/nuxt-community/style-resources-module)

> Use this module only to import variables, mixins, functions (etc.) to Vue components.

- Add `@nuxtjs/style-resources` dependency using yarn or npm to your project.

```bash
yarn add -D @nuxtjs/style-resources
```

- Add `@nuxtjs/style-resources` to `buildModules` section of `nuxt.config.js`:

```js
export default {
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
   // your settings here
   sass: [],
   scss: [],
   less: [],
   stylus: [
     '@/assets/stylus/main.styl'
   ]
  }
}
```

### #04 - Svg Module

[🔗 **Github**](https://github.com/nuxt-community/svg-module)

> This package is for loading SVG's into Nuxt.js pages. It allows you to import `.svg` files in multiple ways depending on the [resource query](https://webpack.js.org/configuration/module/#rule-resourcequery) you provide. Currently, this allows you to do the following:

- `file.svg` - normal import using `file-loader`
- `file.svg?data` - base64 data url import using `url-loader`
- `file.svg?inline` - inline import using `vue-svg-loader`
- `file.svg?raw` - raw html import using `raw-loader`
- `file.svg?sprite` - SVG sprite using `svg-sprite-loader`

Install dependencie

```bash
yarn add -D @nuxtjs/svg
```

Add `@nuxtjs/svg` dependency to Nuxt configuration.

```javascript
// nuxt.config.js
export default {
  buildModules: ["@nuxtjs/svg"],
};
```

__Usage__

*An example of documented use*

`vue-svg-loader`

```html
<template>
  <NuxtLogo />
</template>

<script>
  import NuxtLogo from "~/assets/nuxt.svg?inline";
  export default {
    components: { NuxtLogo },
  };
</script>
```

```html
<svg xmlns="http://www.w3.org/2000/svg"><path></path></svg>
```

### #05 - Router Module

[🔗 **Github**](https://github.com/nuxt-community/router-module)

> Nuxt.js module to use router.js instead of pages/ directory

__Setup__

Add `@nuxtjs/router` dependency to your project

```bash
yarn add --dev @nuxtjs/router # or npm install --save-dev @nuxtjs/router
```

Add `@nuxtjs/router` to the `buildModules` section of `nuxt.config.js`

```js
export default {
  buildModules: [
    // Simple usage
    '@nuxtjs/router',
    // With options
    ['@nuxtjs/router', 
      {
         /* module options */
        path: '<srcDir>',
        fileName: 'router.js'
      }
    ]
  ]
}
```

If you are using SPA mode, add an index `/` route to `generate` section of `nuxt.config.js`:

```js
export default {
  generate: {
    routes: [
      '/'
    ]
  }
}
```

This module, by default, disable the `pages/` directory into Nuxt and will use a `router.js` file at your `srcDir` directory:

```bash
components/
  my-page.vue
pages/
router.js
```

`router.js` need to export a `createRouter` method like this:

```js
import Vue from 'vue'
import Router from 'vue-router'
import MyPage from '~/components/my-page'
Vue.use(Router)
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: MyPage
      }
    ]
  })
}
```