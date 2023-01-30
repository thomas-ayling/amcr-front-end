import dot from '../module/dot'

export default {
  render (object, option) {
    // console.log('render', object)

    var info = dot(object)

    for (var file in this.file) {
      if (this.file.hasOwnProperty(file)) {
        this.file[file].reset()
      }
    }

    // console.log('dotified', this.field, info)

    if (!info) return

    for (var field in this.field) {
      if (this.field.hasOwnProperty(field)) {
        // console.log('field type', field)
        if (this.field[field] &&
            this.field[field].set) {
          this.field[field].set(this.objectValueByDotKey(object, field))
        }
      }
    }

    if (this.disableControls) {
      this.disableControls()
    }

    this.emit('rendered')

    // won't stay there
    if (option === 'create' && this.field['name']) {
      this.focusNameOnRender(this.field['name'])
    }
  },

  objectValueByDotKey (object, dotkey) {
    var keys = dotkey.split(/\./)

    var value = Object.assign({}, object)

    for (var i = 0; i < keys.length; i++) {
      value = value[keys[i]]
    }

    return value
  },

  focusNameOnRender (field) {
    field.focus()
    field.input.select()
  }
}
