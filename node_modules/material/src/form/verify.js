export default {
  verify () {
    var list = this.options.require

    var ok = true

    for (var i = 0; i < list.length; i++) {
      var field = this.ui['info.' + list[i]]

      if (!this.layout.get(list[i]).get()) {
        field.root.classList.add('textfield-error')
        ok = false
      } else {
        field.root.classList.remove('textfield-error')
      }
    }

    return ok
  }
}
