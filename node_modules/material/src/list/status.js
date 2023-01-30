export default {

  status (prop, info) {
    if (prop === 'count') {
      this.statusCount(info)
    }
  },

  statusCount (info) {
    if (this.ui.count) {
      this.ui.count.innerHTML = info
    }
  }
}
