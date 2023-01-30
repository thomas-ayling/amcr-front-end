export default {
  /**
   * [search description]
   * @param  {[type]} ev [description]
   * @return {[type]}    [description]
   */
  search (ev) {
    // console.log('search', ev)
    var keywords = ev.target.value
    if (keywords.length < 4) return

    fetch(this.options.route.search + '?search=' + keywords).then((resp) => {
      return resp.json()
    }).then((list) => {
      // console.log('list', list)
      this.store(list)
      this.ui['search-list'].innerHTML = ''
      this.renderSearch(list)
    })
  },

  renderSearch (list) {
    console.log('render', list.length, list)
    for (var i = 0; i < list.length; i++) {
      var info = list[i]
      this.renderItem(info, 'search')
    }
  },

  /**
   * [toggleSearch description]
   * @return {[type]} [description]
   */
  toggleSearch (e) {
    e.stopPropagation()
    // console.log('toggle search', this.ui.body)
    if (!this.ui['search-input'].classList.contains('show')) {
      this.showSearch()
      if (this.ui.delete) { this.ui.delete.disable() }
    } else {
      this.hideSearch()
      if (this.ui.delete) { this.ui.delete.enable() }
    }
  },

  /**
   * [showSearch description]
   * @return {[type]} [description]
   */
  showSearch () {
    // console.log('showSearch')

    this.ui['search'].root.classList.add('selected')
    this.ui['search-input'].classList.add('show')
    this.ui['search-list'].classList.add('show')
    this.ui.body.classList.add('hide')
    this.ui['search-input'].focus()
  },

  /**
   * [hideSearch description]
   * @return {[type]} [description]
   */
  hideSearch () {
    // console.log('hideSearch')
    this.ui['search'].root.classList.remove('selected')
    this.ui['search-input'].classList.remove('show')
    this.ui['search-list'].classList.remove('show')
    this.ui.body.classList.remove('hide')
  }

}
