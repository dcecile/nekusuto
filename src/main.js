import './style.sass'

import Vue from 'vue'
import App from './app'
import mdljs from './mdljs'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App
  },
  mixins: [
    mdljs('.mdl-textfield', 'textfield')
  ]
})
