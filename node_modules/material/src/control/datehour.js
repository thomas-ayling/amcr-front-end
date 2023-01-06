
const defaults = {
  class: 'date',
  tag: 'span'
}

/**
 * Class representing an image.
 *
 * @extends Date
 * @return {parent} The class instance
 * @example new Date({
 *   date: date,
 *   container: document.body
 * });
 */
class DateHour {
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.options = Object.assign({}, defaults, options || {})

    this.build()

    return this
  }

  /**
   * Build Method
   * @return {Object} This class instance
   */
  build () {
    this.root = document.createElement(this.options.tag)
    this.root.classList.add(this.options.class)

    if (this.options.container) {
      this.options.container.appendChild(this.root)
    }

    return this
  }

  set (date) {
    // console.log('set', src)
    var d = new Date(date)
    var formatted = this.format(d)
    this.root.innerHTML = formatted
  }

  format (date) {
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours || 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes
    var strTime = hours + ':' + minutes + ' ' + ampm
    return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + strTime
  }
}

export default DateHour
