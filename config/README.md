# Nuxt Configuration

Directory with the configurations of the Nuxt file `/nuxt.config.js`

## Additional Dependencies

Additional dependencies to nuxt default settings

### #01 - Pug

> You only need to install the dependency

```bash
# install dependencie
yarn add -D pug pug-plain-loader
```

### #02 - Stylus

> Because Nuxt-edge is not stable yet, it is necessary to install an older version of `stylus-loader v3.0.2`, since the latest versions cause some errors.

```bash
# install dependencie
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

```html
<template>
  <div v-html="rawNuxtLogo" />
</template>

<script>
  import rawNuxtLogo from "~/assets/nuxt.svg?raw";
  export default {
    data() {
      return { rawNuxtLogo };
    },
  };
</script>
```

```html
<div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 298">
    <g fill-rule="nonzero" fill="none"><path></path></g>
  </svg>
</div>
```
