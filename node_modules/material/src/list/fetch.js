export default {
  fetch (page, size) {
    page = page || 1
    size = size || this.options.list.size
    // console.log('fetch')

    var route = this.buildRoute(page, size)

    // console.log('route', route)

    fetch(route).then((resp) => {
      return resp.json()
    }).then((data) => {
      // console.log('data', route, data)

      if (this.options.store) {
        this.storeData(data)
      }

      this.data = data
      if (this.status) {
        // console.log('count', data.length)
        this.status('count', data.length)
      }

      this.render(data)
      if (this.hideSearch) {
        this.hideSearch()
      }

      this.emit('fetched', data)
    })
  },

  buildRoute (page, size) {
    page = page || 1
    size = size || this.options.list.size
    var params = '?'

    var route = this.options.route.list

    if (this.params) {
      params = this.params() || ''
    }

    route = route + params

    if (page === 1) {
      this.ui.body.scrolltop = 0
    }

    if (this.options.pagination) {
      route = route + 'page=' + page + '&size=' + size
    }

    return route
  },

  storeData (list) {
    // console.log('storeData')
    this.dataStore = this.dataStore || {}
    for (var i = 0; i < list.length; i++) {
      this.dataStore[list[i]._id] = list[i]
    }
  }
}
