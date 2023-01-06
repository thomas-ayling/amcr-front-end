
export default {

  create (info) {
    console.log('create', info, this.info)
    this.form.style.display = 'flex'

    this.setMode('create')
    this.render(this.options.create, 'create')

    if (this.controls) {
      this.enableControls()
    }
  }
}
