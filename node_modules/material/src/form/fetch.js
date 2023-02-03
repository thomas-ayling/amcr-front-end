export default {
  fetch (option) {
    fetch(this.options.route, {
      method: option.method,
      body: option.formData
    }).then(r => r.json()).then(info => {
      if (info.error) {
        console.log('Error: ' + info.error)
        if (this.error) {
          this.error(info)
        }
      } else {
        // console.log('submit ok', info, this.mode)
        if (this.mode === 'create') {
          this.emit('created', info)
          this.mode = null
        } else {
          this.info = info
          this.emit('updated', info)
        }

        if (this.success) {
          this.success(info)
        }
      }
    })
  }
}
