<template lang='pug'>

  .cover-page
    img.cover-page__background(src="../assets/images/cover-page_bg_mobil.png")
    .cover-page__titles-group
      h1.cover-page__title
        |YELI MOTA
      h2.cover-page__subtitle
        |STREAMER / YOUTUBER
      h3.cover-page__subtitle
        |CONTENT CREATOR
    .cover-page__buttons-box
      .cover-page__button
        SocialButton(
          classButton='twitch' text='Twitch')
          IconTwitch
      .cover-page__button
        SocialButton(
          classButton='gmail' text='Gmail')
          IconGmail

</template>

<script>

import IconTwitch from '~/assets/icons/twitch.svg?inline'
import IconGmail from '~/assets/icons/gmail.svg?inline'

export default {
  name: 'CoverPage',
  components: {
    IconTwitch, IconGmail
  }
}

</script>

<style lang='stylus' scoped>
.cover-page
  position relative
  height 100vh
  display flex
  flex-direction column
  justify-content flex-end
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
  &__title
    font-family: $font-streamer-title
    color: $clr-white
    font-size 60px
    font-weight 400
    line-height 60px
  &__subtitle
    font-family $font-streamer-subtitle
    color: $clr-white
    font-size:30px
    line-height: 10px
    font-weight 700
</style>
