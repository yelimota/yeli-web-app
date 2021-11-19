<template lang='pug'>

  button.social-button(
  :class='`social-button--${classButton}`')

    slot
    span.social-button__text {{text}}

</template>
<script>

export default {
  name: 'SocialButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    classButton: {
      type: String,
      default: 'twitch'
    }
  }
}

</script>

<style lang='stylus' scoped>

  .social-button
    display: block
    margin: 3vw auto
    font-size: 7vw
    position relative
    width: 80%
    border-radius 4vw
    border: 0
    svg
      fill: $clr-white

  .social-button--twitch,
  .social-button--gmail
    color $clr-white
  .social-button--twitch
    background rgba($clr-twich, .7)
  .social-button--gmail
    background rgba($clr-google, .7)

</style>
