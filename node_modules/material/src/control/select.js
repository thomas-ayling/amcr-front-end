
const defaults = {
  class: 'textfield',
  tag: 'div'
}

class Text {
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.options = Object.assign({}, defaults, options || {})

    // console.log('options', options)

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

    if (this.options.label) {
      this.label = document.createElement('span')
      this.label.innerHTML = this.options.label
      this.root.appendChild(this.label)
    }

    this.input = document.createElement('input')
    this.root.appendChild(this.input)

    if (this.options.type) {
      this.input.setAttribute('type', this.options.type)
    }

    if (this.options.name) {
      this.input.setAttribute('name', this.options.name)
    }

    if (this.options.required) {
      this.input.setAttribute('required', 'required')
    }

    if (this.options.autocomplete) {
      this.input.setAttribute('autocomplete', this.options.autocomplete)
    }

    if (this.container) {
      this.container.appendChild(this.root)
    }

    return this
  }

  set (value) {
    this.input.value = value
  }

  get () {
    return this.input.value
  }
}

export default Text
