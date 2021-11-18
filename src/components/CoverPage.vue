<template lang='pug'>

  .cover-page
    img.cover-page__background(src="../assets/images/cover-page_bg_desktop.png")
    .cover-page__titles-group
      h1.cover-page__title
        |YELI MOTA
      h2.cover-page__subtitle
        |STREAMER / YOUTUBER
      h3.cover-page__subtitle
        |CONTENT CREATOR
    .cover-page__buttons-box
      div.cover-page__button
      div.cover-page__button

      //- button(class="btn btn-twitch cover-page__button")
      //-   span( class="icon") Twitch
      //-   span Twitch
      //- button(class="btn btn-youtube cover-page__button")
      //-   span( class="icon") Youtube
      //-   span Youtube

</template>

<script>

export default {
  name: 'CoverPage'
}

</script>

<style lang='stylus' scoped>
.cover-page
  position relative
  height 100vh
  &::before
    top 0
    left 0
    content ''
    position: absolute
    background: $clr-secondary
    width 100%
    height 100%

  &__background
    position absolute
    width 100%
    height 100%
    opacity 0.45

  &__titles-group
    position relative
    text-align: center
</style>
