<template>
  <div class="mdl-typography--text-center mdl-color-text--grey-600">
    <h1 class="mdl-typography--display-4">Nekusuto</h1>
    <h5 class="mdl-typography--display-2">Connecting game devs and Let’s Players</h5>
    <signup></signup>
  </div>
</template>

<script>
import Signup from './signup'

export default {
  components: {
    Signup
  }
}
</script>

<style lang="sass">
@import color
@import ~material-design-lite/src/material-design-lite

body
  margin: 0
</style>
