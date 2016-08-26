<template>
  <button id="sign-up" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
    Sign up
  </button>
</template>

<script>
import mdljs from './mdljs'

export default {
  mixins: [
    mdljs('button', 'button')
  ]
}
</script>

<style lang="sass">
#sign-up
  margin-top: 15px
</style>
