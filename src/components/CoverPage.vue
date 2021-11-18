<template lang='pug'>

  .cover-page
    img.cover-page__background(src="https://images.ctfassets.net/hrltx12pl8hq/58CIvG6Whv49bsmRbqaEZ6/e42a73d8ddef6f9c126fa49d384be678/6.jpg?fit=fill&w=480&h=270")
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
  &__background
    position absolute
    width 100%
    z-index -1

</style>
