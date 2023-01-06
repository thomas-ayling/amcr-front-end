export default {

  submit (ev) {
    ev.preventDefault()
    // console.log('submit', this.ui, this.file, this.info)
    // ev.preventDefault()
    if (this.verify && !this.verify()) return

    // console.log('submit')
    if (this.disableControls) {
      this.disableControls()
    }

    var formData = new FormData()

    if (this.info && this.info._id) {
      formData.append('id', this.info._id)
    }

    if (this.info && this.info.uuid) {
      formData.append('id', this.info.uuid)
    }

    // append field

    for (var field in this.field) {
      if (this.field.hasOwnProperty(field)) {
        // console.log('append field', field, this.field[field])
        formData.append(field, this.field[field].get())
      }
    }

    // append files

    for (var file in this.file) {
      // console.log('this file', this.file, this.file[file].input)
      // console.log('file', file, this.file[file])
      if (this.file.hasOwnProperty(file) && this.file[file].input && this.file[file].input.value) {
        // console.log('---- append file', this.file[file].input.value)
        formData.append(file, this.file[file].input.files[0])
      }
    }

    // console.log('formData', formData.keys())

    var method = 'PUT'
    if (this.mode === 'create') {
      method = 'POST'
    }

    if (this.fetch) {
      this.fetch({
        method: method,
        formData: formData
      })
    }

    if (this.action) {
      this.action({
        method: method,
        formData: formData
      })
    }

    return false
  }
}
