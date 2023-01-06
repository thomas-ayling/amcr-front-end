const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export default {
  update (data) {
    // console.log('update', data)
    var header = this.options.form.headers || headers

    fetch(this.options.form.action, {
      method: this.options.form.method,
      headers: header,
      body: JSON.stringify(data)
    }).then((resp) => {
      return resp.json()
    }).then((info) => {
      // console.log('info', info)
      if (info.error) {
        if (this.error) this.error(info)
      } else {
        this.info = info
        this.emit('updated', this.info)
      }
    })
  }
}
