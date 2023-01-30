'use strict'

const defaults = {
  prefix: 'material',
  class: 'email'
}

/**
 * Base class for all ui components
 * @class
 * @param {Object} options - The component options
 * @return {Object} The class Instance
 */

/**
 * Class representing a UI Container. Can add components.
 *
 * @extends Component
 * @return {parent} The class instance
 * @example new Container({
 *   container: document.body
 * });
 */
class EmailLink {
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
    this.root = document.createElement('a')
    this.root.classList.add('email')

    if (this.options.container) {
      this.options.container.appendChild(this.root)
    }

    return this
  }

  set (email) {
    this.root.innerHTML = email
    this.root.setAttribute('href', 'mailto:' + email)
  }
}

export default EmailLink
