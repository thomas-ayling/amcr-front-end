export default {
  setMode (mode) {
    // console.log('setMode', mode)
    this.mode = mode

    this.emit('mode', mode)
  }
}
