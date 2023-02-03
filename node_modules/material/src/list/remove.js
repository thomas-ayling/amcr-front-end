export default {
  remove (id) {
    // console.log('remove', id, this.ui.body)

    var item = this.ui.body.querySelector('[data-id="' + id + '"]')
    // console.log('item', item)
    this.ui.body.removeChild(item)
  }
}
