export default {
  select (item) {
    // console.log('select')

    if (!item.dataset.id) return

    var id = item.dataset.id

    if (this.options.preventSelectAgain && this.id === id) {
      return
    }

    if (this.mode === 'create') {
      // console.log('cancel create', this.newItem)
      if (this.newItem) {
        this.ui.body.removeChild(this.newItem)
        this.newItem = null
      }
      this.mode = null
    }

    if (id) {
      this.highlight(item)
      this.item = item
      this.id = id
      if (this.ui.delete) { this.ui.delete.enable() }
      this.emit('select', id)
    } else {
      this.id = null
      if (this.item) {
        this.item.classList.remove('selected')
      }
      this.ui.delete.disable()
    }
  },

  unselect () {
    this.id = null
    if (this.item) {
      this.item.classList.remove('selected')
    }
    this.item = null
  },

  next () {
    // console.log('next', this.item)
    if (this.item && this.item.nextSibling) {
      this.select(this.item.nextSibling)
    } else {
      if (!this.item && this.ui.body.firstChild) {
        this.select(this.ui.body.firstChild)
      }
    }
  },

  previous () {
    // console.log('previous', this.item)
    if (this.item && this.item.previousSibling) {
      this.select(this.item.previousSibling)
    }
  },

  highlight (item) {
    if (this.item) {
      this.item.classList.remove('selected')
    }
    item.classList.add('selected')
  },

  selectCreated (info, item) {
    // console.log('select create', info, this.item)
    if (this.item) {
      this.item.classList.remove('selected')
    }

    item.classList.add('selected')

    this.emit('selectCreate', info)
  }
}
