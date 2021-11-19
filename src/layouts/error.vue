<template lang="pug">

  .layout-error

    h1 Ups! Pagína no encontrada - 404

    NuxtLink(:to="{ name: 'Home' }")
      |Regresar al Inicio

</template>

<script>

export default {
  name: 'ErrorLayout',
  components: {},
  // layout: 'blog', // you can set a custom layout for the error page
  created: () => {
    // eslint-disable-next-line no-console
    console.warn('Error Status: 404', '\n Not found page')
  }
}

</script>

<style>
</style>
