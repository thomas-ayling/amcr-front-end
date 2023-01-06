'use strict'

import init from './component/init'
import insert from './element/insert'
import classify from './component/classify'
import css from './module/css'
import events from './component/events'
import create from './element/create'
import emitter from './module/emitter'

const defaults = {
  prefix: 'material',
  class: 'drawer',
  modifier: 'width',
  state: 'closed',
  position: 'left',
  tag: 'div',
  width: '340',
  modules: [emitter, events]
}

/**
 * Class representing a UI Container. Can add components.
 *
 * @extends Component
 * @return {parent} The class instance
 * @example new Container({
 *   container: document.body
 * });
 */
class Drawer {
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.options = Object.assign({}, defaults, options || {})

    init(this)

    this.build()
    this.attach()

    this.emit('ready')

    return this
  }

  /**
   * Build Method
   * @return {Object} This class instance
   */
  build () {
    // console.log('build')
    this.wrapper = create('div')

    classify(this.wrapper, this.options)

    this.root = create('aside')

    css.add(this.root, 'drawer-panel')

    insert(this.root, this.wrapper)

    if (this.options.position) {
      css.add(this.root, 'position-' + this.options.position)
    }

    if (this.options.fixed) {
      this.wrapper.classList.add('is-fixed')
    }

    if (this.options.size) {
      if (this.options.position === 'top' || this.options.position === 'bottom') {
        this.root.style = 'height: ' + this.options.size + 'px;'
      } else {
        this.root.style = 'width: ' + this.options.size + 'px;'
      }
    }

    if (this.options.open) {
      this.open()
    }

    if (this.options.container) { insert(this.wrapper, this.options.container) }

    this.emit('built', this.root)

    return this
  }

  attach () {
    // console.log('attach', this.options.type)
    if (this.options.type === 'persistent') return
    if (this.options.type === 'permanent') return

    this.wrapper.addEventListener('click', (e) => {
      // console.log('target', e.currentTarget)
      if (this.wrapper === e.currentTarget) {
        this.close()
      }
    })
  }

  /**
   * [toggle description]
   * @return {Object} The class instance
   */

  toggle () {
    // console.log('toggle', this.root);
    if (this.wrapper.classList.contains('show')) {
      this.close()
    } else {
      this.open()
    }

    return this
  }

  /**
   * [minimize description]
   * @return {Object} The class instance
   */
  close () {
    // console.log('close');
    css.remove(this.wrapper, 'show')
    // css.remove(this.underlay, 'show')

    return this
  }

  /**
   * [normalize description]
   * @return {Object} The class instance
   */
  open () {
    // console.log('open')

    css.add(this.wrapper, 'show')

    return this
  }

  /**
   * [insert description]
   * @param  {?} container [description]
   * @return {?}           [description]
   */
  insert (container, context) {
    insert(this.wrapper, container, context)

    return this
  }
}

export default Drawer
