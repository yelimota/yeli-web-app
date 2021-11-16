<template lang='pug'>

  header.header
    nav
      button.advisor ASESORA
      button.lawyer ABOGADA
      .nav-desktop-button
        button.curiosities CURIOSIDADES
        button.schedules HORARIOS
        button.moderators MODERADORES
      select.languages
        option ESPAÑOL
        option INGLES
      button(class="fas fa-bars button-nav")
      button.togglebar
        img(src="imagetogglebarLight.png" class="toggleBarLight")
        img(src="imagetogglebarDark.png" class="toggleBarDark")
    //- nav
    //-   a(href="#", class="fas fa-bars")
    //-   .togglebar
    //-     img(src="imagetogglebarLight.png" class="toggleBarLight")
    //-     img(src="imagetogglebarDark.png" class="toggleBarDark")

</template>

<script>

export default {
  name: 'Header'
}

</script>

<style lang='stylus' scoped>
</style>
