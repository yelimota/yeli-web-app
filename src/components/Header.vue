<template lang='pug'>

  header.header
    nav.header_nav
      button.header_nav_advisor ASESORA
      button.header_nav_lawyer ABOGADA
      .header_nav_desktop-button
        button.header_nav_desktop-button_curiosities CURIOSIDADES
        button.header_nav_desktop-button_schedules HORARIOS
        button.header_nav_desktop-button_moderators MODERADORES
      select.header_nav_languages
        option ESPAÑOL
        option INGLES
      button(class="fas fa-bars header_nav_button")
      button.header_nav_togglebar
        img(src="imagetogglebarLight.png" class="header_nav_togglebar_light")
        img(src="imagetogglebarDark.png" class="header_nav_togglebar_dark")
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
