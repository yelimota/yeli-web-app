<template lang='pug'>

  header.header
    nav.header__nav
      button.header__advisor ASESORA
      button.header__lawyer ABOGADA
      .header__desktop-button
        button.header__desktop-button__link CURIOSIDADES
        button.header__desktop-button__link HORARIOS
        button.header__desktop-button__link MODERADORES
      select.header__languages
        option ESPAÑOL
        option INGLES
      button(class="fas fa-bars header__button")
      button.header__togglebar
        img(src="imagetogglebarLight.png" class="header__togglebar__light")
        img(src="imagetogglebarDark.png" class="header__togglebar__dark")
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
