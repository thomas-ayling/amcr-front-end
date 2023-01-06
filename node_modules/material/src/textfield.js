'use strict'

import emitter from './module/emitter'
import attach from './module/attach'

var defaults = {
  prefix: 'material',
  class: 'textfield',
  type: 'control',
  tag: 'div',
  events: [
    // 'change': '_onChange',
    ['input.focus', 'focus'],
    ['input.blur', 'blur'],
    // ['input.keypress', '_handleInputKeyPress',
    ['input.keyup', '_handleInputKeyPress']
    // ['input.change', '_onChange']
    // 'input.keydown': '_handleInputKeyPress'

  ]
}

/**
 * Textfield class
 * @class
 */
class Textfield {
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.options = Object.assign({}, defaults, options || {})

    this.init()
    this.build()
    this.attach()

    return this
  }

  /**
   * init
   * @param  {Object} options The class options
   * @return {Object} The class instance
   */
  init () {
    Object.assign(this, emitter, attach)

    this.value = this.options.value
    this.readonly = this.options.readonly
    this.disabled = this.options.disabled

    return this
  }

  /**
   * [build description]
   * @return {Object} The class instance
   */
  build () {
    // create a new div as input element
    var tag = this.options.tag || 'div'
    this.root = document.createElement(tag)
    this.root.classList.add(this.options.prefix + '-' + this.options.class)

    this.buildLabel()
    this.buildInput()
    this.buildUnderline()

    if (this.disabled) {
      css.add(this.root, 'is-disabled')
    }

    // insert if container this.options is given
    if (this.options.container) {
      // console.log(this.name, opts.container);
      insert(this.root, this.options.container)
    }
  }

  buildLabel () {
    this.label = document.createElement('label')
    this.label.classList.add(this.options.class + '-label')
    this.root.appendChild(this.label)

    if (this.options.label !== false) {
      this.setLabel()
    }
  }

  /**
   * [_initInput description]
   * @return {Object} The class instance
   */
  buildInput () {
    this.input = document.createElement('input')
    this.input.classList.add(this.options.class + '-input')
    this.input.setAttribute('type', 'text')
    this.root.appendChild(this.input)

    if (this.options.name) {
      this.input.setAttribute('name', this.options.name)
    }

    if (!this.options.value) {
      this.root.classList.add('is-empty')
    }

    if (this.readonly) {
      this.input.setAttribute('readonly', 'readonly')
      this.input.setAttribute('tabindex', '-1')
    }

    return this.input
  }

  /**
   * _initUnderline
   * @return {Object} The class instance
   */
  buildUnderline () {
    this.underline = document.createElement('span')
    this.underline.classList.add(this.options.class + '-underline')
    this.root.appendChild(this.underline)
  }

  /**
   * Setter
   * @param {string} prop
   * @param {string} value
   */
  set (prop, value, options) {
    switch (prop) {
      case 'value':
        this.setValue(value, options)
        break
      case 'label':
        this.setLabel(value, options)
        break
      case 'disabled':
        if (value === true) {
          this.disable()
        } else if (value === false) {
          this.enable()
        }
        break
      default:
        this.setValue(prop, value)
    }

    return this
  }

  /**
   * [buildLabel description]
   * @return {Object} The class instance
   */
  setLabel (label) {
    label = label || this.options.label
    var text

    if (label === null || label === false) {
      text = ''
    } else if (this.options.label) {
      text = label
    } else {
      text = this.options.name
    }

    this.label.textContent = text
  }

  disable () {
    this.disabled = true

    this.input.setAttribute('disabled', 'disabled')
    this.root.classList.add('is-disabled')
    return this
  }

  enable () {
    this.disabled = false

    this.element.input.removeAttribute('disabled')
    this.root.classList.remove('is-disabled')
    return this
  }

  /**
   * Getter
   * @param {string} prop
   * @param {string} value
   */
  get (prop) {
    var value

    switch (prop) {
      case 'value':
        value = this.getValue()
        break
      case 'name':
        value = this.name
        break
      default:
        return this.getValue()
    }

    return value
  }

  /**
   * [getValue description]
   * @return {Object} The class instance
   */
  getValue () {
    // console.log('getValue', this);
    return this.input.value
  }

  /**
   * [setValue description]
   * @param {string} value [description]
   */
  setValue (value, silent) {
    // console.log('setValue', value, silent);
    this.input.value = value

    if (value) {
      this.root.classList.remove('is-empty')
    } else {
      this.root.classList.add('is-empty')
    }

    if (!silent) { this.emit('change', value) }
  }

  /**
   * [_initValue description]
   * @return {Object} The class instance
   */
  _initValue () {
    var opts = this.options

    // create a new div as input element
    if (opts.value) {
      this.setValue(opts.value)
    }
  }

  /**
   * [_onFocus description]
   * @return {Object} The class instance
   */
  _handleInputKeyPress (e) {
    // console.log('_handleInputKeyPress', e);
    if (this.readonly) return

    if (this.get('value') === '') {
      this.root.classList.add('is-empty')
    } else {
      this.root.classList.remove('is-empty')
    }

    this.emit('change', this.getValue())
  }

  /**
   * focus method
   * @return {?} [description]
   */
  focus () {
    if (this.disabled) return this
    if (this.readonly) return this

    this.root.classList.add('is-focused')
    if (this.input !== document.activeElement) { this.input.focus() }
    return this
  }

  /**
   * blur method
   * @return {?} [description]
   */
  blur () {
    if (this.readonly) return this

    this.root.classList.remove('is-focused')

    return this
  }
  /**
   * [setError description]
   * @param {string} error Error description
   */
  setError (error) {
    if (error) {
      this.addClass('field-error')
      if (this.error) { this.error.set('html', error) }
    } else {
      if (this.error) { this.removeClass('field-error') }
      if (this.error) { this.error.set('html', '') }
    }
  }
}

export default Textfield
