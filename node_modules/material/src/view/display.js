
export default {
  toggle () {
    this.visible ? this.hide() : this.show()
  },

  show () {
    // console.log('show')
    this.root.classList.add('show')
    this.visible = true

    if (this.underlay) {
      this.underlay.classList.add('show')
    }

    this.emit('show')
  },

  hide () {
    // console.log('show')
    this.root.classList.remove('show')
    this.visible = false

    if (this.underlay) {
      this.underlay.classList.remove('show')
    }

    this.emit('hide')
  }
}
