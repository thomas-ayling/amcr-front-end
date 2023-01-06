
/**
 * Class Element
 * @class
 * @since 0.0.1
 * @example
 * var div = new Element({
 *   tag: 'div',
 *   class: 'mydiv',
 * })
 */

class Element {
  static isElement () {
    return true
  }

  /**
   * The init method of the Button class
   * @param  {Object} The element attributes
   * @private
   * @return {DOMElement} The dom element
   */
  constructor (options) {
    this.options = Object.assign({}, options || {})
    // console.log('element options', options)
    var element = document.createElement(this.options.tag || 'div')

    if (options.html) {
      element.innerHTML = this.options.html
    }

    if (options.text) {
      element.textContent = this.options.text
    }

    if (options.id) {
      element.setAttribute('id', options.id)
    }

    delete this.options.tag
    delete this.options.text
    delete this.options.html

    for (var property in this.options) {
      if (this.options.hasOwnProperty(property)) {
        element.setAttribute(property, this.options[property])
      }
    }

    if (this.options.container) {
      this.options.container.appendChild(element)
    }

    return element
  }
}

export default Element
