import 'material-design-lite/material'

export default function (selector, name) {
  return {
    ready () {
      const className = 'mdl-js-' + name
      const elements = this.$el.querySelectorAll(selector)
      for (const element of elements) {
        element.classList.add(className)
        window.componentHandler.upgradeElement(element)
      }
    }
  }
}
