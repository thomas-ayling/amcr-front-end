export default {
  set (id) {
    // console.log('set', info._id)
    if (!id) return

    this.emit('set', id)

    this.setMode('read')
    // this.render(info)
    fetch(this.options.route + id, {
      headers: {
        'Accept': 'application/json'
      },
      method: 'GET'
    }).then((resp) => {
      // console.log('resp', resp)
      return resp.json()
    }).then((data) => {
      // console.log('data', data)
      this.form.style.display = 'flex'
      this.info = data
      this.render(data)

      if (this.ui.delete) {
        this.ui.delete.enable()
      }

      this.emit('setted', id)
    })
  }
}
