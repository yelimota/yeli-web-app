<template lang='pug'>

  button.social-button(:class='`social-button--${typeButton}`')
    img.social-button__icon(:src='srcIcon')
    span.social-button__text Twitch

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
    }
  }
}

</script>

<style lang='stylus' scoped>
  .social-button
    display: block
    margin: auto
    font-size: 4vw

  .social-button--twitch
    background green
  .social-button--gmail
    background green
</style>
