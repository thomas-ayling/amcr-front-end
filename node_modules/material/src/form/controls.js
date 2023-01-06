
export default {

  initControls () {
    // console.log('initControls', this.field)
    for (var field in this.field) {
      if (this.field.hasOwnProperty(field)) {
        var control = this.field[field]
        if (control && control.on) {
          control.on('change', () => {
            // console.log('change')
            if (this.enableControls) {
              this.enableControls()
            }
          })
        }
      }
    }

    for (var file in this.file) {
      if (this.file.hasOwnProperty(file)) {
        var control = this.file[file]
        if (control && control.on) {
          control.on('change', () => {
            // console.log('change')
            if (this.enableControls) {
              this.enableControls()
            }
          })
        }
      }
    }
  },

  enableControls () {
    // console.log('enableControls')
    if (!this.options.controls) return

    for (var i = 0; i < this.options.controls.length; i++) {
      if (this.ui[this.options.controls[i]].enable) {
        this.ui[this.options.controls[i]].enable()
      }
    }
  },

  disableControls () {
    // console.log('disableControls')
    if (!this.options.controls) return

    for (var i = 0; i < this.options.controls.length; i++) {
      if (this.ui[this.options.controls[i]].disable) {
        this.ui[this.options.controls[i]].disable()
      }
    }
  }
}
