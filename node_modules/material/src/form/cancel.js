export default {
  cancel () {
    console.log('cancel', this.info, this.mode)

    this.render(this.info)

    if (this.mode === 'create') {
      console.log('cancel create')
      this.mode = null
      this.emit('cancel', 'create')
    }
  }
}
