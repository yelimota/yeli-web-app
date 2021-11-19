<template lang='pug'>

  button.social-button(:class='`social-button--${typeButton}`')
    img.social-button__icon(:src='srcIcon')
    span.social-button__text {{spanText}}

</template>
<script>

export default {
  name: 'SocialButton',
  props: {
    typeButton: {
      type: String,
      default: 'twitch'
    },
    srcIcon: {
      type: String,
      default: ''
    },
    spanText: {
      type: String,
      default: ''
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

  .social-button--twitch
    background rgba($clr-twich, .7)
    color $clr-white
  .social-button--gmail
    background rgba($clr-google, .7)
    color $clr-white
</style>
