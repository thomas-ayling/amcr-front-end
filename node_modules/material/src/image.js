'use strict'

// import insert from './component/insert'
import css from './module/css'
import insert from './element/insert'
import control from './component/control'

var defaults = {
  prefix: 'material',
  class: 'image',
  tag: 'div'
}

/**
 * The item class is used for example as item list
 *
 * @class
 * @extends {Component}
 * @return {Object} The class instance
 * @example new Item(object);
 */
class Image {
  /**
   * init
   * @return {Object} The class options
   */
  constructor (options) {
    this.init(options)
    this.build()

    return this
  }

  /**
   * [init description]
   * @param  {?} options [description]
   * @return {?}         [description]
   */
  init (options) {
    this.options = Object.assign({}, defaults, options || {})
    Object.assign(this, control)
  }

  /**
   * Build function for item
   * @return {Object} This class instance
   */
  build (options) {
    options = options || this.options

    var tag = options.tag || 'div'
    var text = options.text || options.label
    this.root = document.createElement(tag)

    // if (options.src) {
    //   this.root.setAttribute('style', 'background-image: url(' + options.src + ')')

    if (options.src) {
      this.image = document.createElement('img')
      this.image.setAttribute('src', options.src)
      css.add(this.image, this.options.class + '-image')
      insert(this.image, this.root)
    }

    this.info = document.createElement('span')
    css.add(this.info, this.options.class + '-info')

    insert(this.info, this.root)

    this.label(text, this.info)

    // this.label = this.element.label

    this.icon(this.options.icon, this.info, 'bottom')

    // if (text) {
    //   this.label = document.createElement('span')
    //   this.label.innerText = text
    //   css.add(this.label, this.options.class + '-label')
    //   insert(this.label, this.root)
    // }

    css.add(this.root, this.options.prefix + '-' + this.options.class)

    if (options.css) { css.add(this.root, options.css) }
    // css.add(this.root, this.options.class + '-adjust');

    if (this.options.container) {
      this.insert(this.options.container)
    }
  }

  /**
   * [insert description]
   * @param  {?} container [description]
   * @param  {?} context   [description]
   * @return {?}           [description]
   */
  insert (container, context) {
    insert(this.root, container, context)

    return this
  }

  /**
   * Get or set text value of the element
   * @param {string} value The text to set
   * @returns {*}
   */
  set (value) {
    if (value) {
      if (this.root.innerText) {
        this.root.innerText = value
      } else {
        this.root.textContent = value
      }

      return this
    }

    return this
  }
}

export default Image
