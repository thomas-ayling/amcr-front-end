'use strict'

const defaults = {
  class: 'text',
  tag: 'span'
}

class Text {
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

    if (this.options.text) {
      this.set(this.options.text)
    }

    if (this.options.container) {
      this.options.container.appendChild(this.root)
    }

    return this
  }

  set (text) {
    // console.log('set', text)
    this.root.innerHTML = text

    if (this.options.spaceAfter) {
      this.root.innerHTML = this.root.innerHTML + ' '
    }
  }
}

export default Text
