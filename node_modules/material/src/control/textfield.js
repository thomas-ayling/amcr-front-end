
import emitter from '../module/emitter'
import attach from '../module/attach'
import dataset from '../view/dataset'
import attributes from './module/attributes'

const defaults = {
  class: 'textfield',
  tag: 'div',
  attributes: ['type', 'name', 'autocomplete', 'required', 'disabled'],
  events: [
    ['input.keyup', 'onKeyup']
  ]
}

class Text {
  static isComponent () {
    return true
  }
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.options = Object.assign({}, defaults, options || {})
    Object.assign(this, emitter, attach, dataset)
    // console.log('options', options)

    this.build()
    this.attach()

    return this
  }

  /**
   * Build Method
   * @return {Object} This class instance
   */
  build () {
    this.root = document.createElement(this.options.tag)
    this.root.classList.add('textfield')

    if (this.options.class !== 'upload') {
      this.root.classList.add(this.options.class)
    }

    this.buildLabel()
    this.buildInput()

    if (this.options.value) {
      this.set(this.options.value)
    }

    if (this.options.data) {
      dataset(this.root, this.options.data)
    }

    if (this.container) {
      this.container.appendChild(this.root)
    }

    return this
  }

  buildLabel () {
    if (this.options.label) {
      this.label = document.createElement('span')
      this.label.innerHTML = this.options.label
      this.root.appendChild(this.label)
    }
  }

  buildInput () {
    this.input = document.createElement('input')
    this.root.appendChild(this.input)

    attributes(this.input, this.options)

    if (this.options.focus) {
      this.input.focus()
    }
  }

  onKeyup (ev) {
    // console.log('change', this.value, this.input.value)
    if (this.value !== this.input.value) {
      this.emit('change', ev)
    }
  }

  set (value) {
    // console.log('set', value)
    this.value = value
    this.input.value = value
  }

  get () {
    return this.input.value
  }
}

export default Text
