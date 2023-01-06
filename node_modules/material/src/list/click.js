
export default {
  click (e) {
    // e.stopPropagation()

    if (e.target === e.currentTarget) {
      return
    }

    var target = '[data-id]'
    var item = e.target
    var i = 0

    while (item && !item.matches(target)) {
      // console.log('item', item)
      if (i > 10) {
        item = null
        break
      }
      item = item.parentNode
      i++
    }

    if (this.select) {
      this.select(item)
    }

    if (e.target.matches('BUTTON') && e.target.dataset.name && item.dataset.id) {
      // console.log('button', e.target.dataset.name)
      this.emit(e.target.dataset.name, item.dataset.id)
    }

    // console.log(item)
  }
}
