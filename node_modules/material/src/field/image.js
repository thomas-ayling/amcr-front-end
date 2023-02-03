'use strict'

const defaults = {
  class: 'image',
  format: 'thumb'
}

/**
 * Class representing an image.
 *
 * @extends Image
 * @return {parent} The class instance
 * @example new Image({
 *   src: {
 *     filename: 'image.png',
 *     url: 'exmaple.com/image/'
 *     format: ['thumbs/', 'medium/', 'large/'],
 *   },
 *   container: document.body
 * });
 */
class Image {
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
    this.root = document.createElement('div')
    this.root.classList.add(this.options.class)

    if (this.options.container) {
      this.options.container.appendChild(this.root)
    }

    return this
  }

  set (src) {
    // console.log('set', src)

    if (!src) return

    var url = src.url

    if (src.format) {
      var format = this.sanitize(src.format)

      if (format.length > 0) {
        var index = format.indexOf(this.options.format)
        if (index === -1) {
          format = src.format[0] + '/'
        } else {
          format = this.options.format + '/'
        }
      }

      url = url + format
    }

    this.root.style.backgroundImage = 'url(' + url + src.filename + ')'
  }

  sanitize (formats) {
    var a = []
    for (var i = 0; i < formats.length; i++) {
      var format = formats[i].replace(/\/$/, '')
      a.push(format)
    }

    return a
  }
}

export default Image
