'use strict'

import create from './component/create'
import insert from './component/insert'
import offset from './element/offset'

const defaults = {
  prefix: 'material',
  class: 'toolbar',
  tag: 'div'
}

class Toolbar {
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.init(options)
    this.build()
    this.attach()
    return this
  }

  init (options) {
    this.options = Object.assign({}, defaults, options || {})
    Object.assign(this, insert)

    // console.log('waterfALL', this.options.waterfall)

    this.waterfall = this.options.waterfall
  }

  /**
   * Build Method
   * @return {Object} This class instance
   */
  build () {
    this.root = create(this.options)

    // console.log(this.options.height, this.options.fixed)

    if (this.options.height) {
      this.root.style.height = this.options.height + 'px'
    }

    if (this.options.fixed) {
      // console.log('is-fixed')
      this.root.classList.add('is-fixed')
    }

    if (this.options.flexible) {
      this.root.classList.add('is-flexible')
    }

    // if (this.options.container) {
    //   this.insert(this.options.container)
    // }

    return this
  }

  attach () {
    this.root.addEventListener('DOMNodeInserted', (e) => {
      var textNode = e.target
      if (textNode !== this.root) return

      var size = this.size = offset(this.root, 'height')

      var view = this.view = this.root.parentNode

      // console.log('view', view)

      var padding = window.getComputedStyle(view)['padding-top']
      // console.log('paddingTop', padding)
      // if (!padding) padding = window.getComputedStyle(this.root.parentNode, 'padding')
      // console.log('padding', padding)

      padding = parseInt(padding, 10)
      // size = parseInt(size, 10)

      this.padding = padding

      // console.log(' toolbar inserted in', size, 'padding', padding)
      var ptop = this.ptop = size + padding

      // console.log('ptop', ptop)

      if (document.body == view) {
        // console.log('toolbar container body')
        this.root.classList.add('toolbar-body')
      }

      // view.setAttribute('style', 'padding-top: ' + ptop + 'px')

      this.scroll(view)
    })
  }

  /**
   * Setter
   * @param {string} prop
   * @param {string} value
   * @return {Object} The class instance
   */
  set (prop, value) {
    switch (prop) {
      case 'minimize':
        this.root.setAttribute('style', 'height: 64px')
        break
      case 'value':
        this.setValue(value)
        break
      case 'label':
        this.setLabel(value)
        break
      default:
        this.check(prop)
    }

    return this
  }

  scroll (view) {
    // console.log('initScroll')

    var isBody = false

    var element = view

    this.scrolling = view

    if (view === document.body) {
      isBody = true
      element = document
      this.scrolling = document.body
    }

    view.classList.add()

    element.addEventListener('scroll', (e) => {
      var scrollTop
      if (isBody) {
        scrollTop = (document.documentElement ||
       document.body.parentNode ||
       document.body).scrollTop
      } else {
        scrollTop = view.scrollTop
      }

      if (scrollTop > 0) {
        this.root.classList.add('is-scrolled')
      } else {
        this.root.classList.remove('is-scrolled')
      }

      // console.log('scroll', scrollTop)

      this.update(e, scrollTop)
    })
  }

  update (e, scrollTop) {
    if (this.options.fixed) { this.fixed(e, scrollTop) }
    if (this.options.flexible) { this.flexible(e, scrollTop) }
  }

  flexible (e, scrollTop) {
    var size = offset(this.root, 'height')
    // console.log('flexible', size, this.root.offsetHeight, scrollTop)
    // if (scrollTop < this.size) {
    //
    var height = '64'
    if (size < height) {
      this.root.style.height = height + 'px'
    } else {
      height = this.size - scrollTop
      if (height < 64) height = 64
      this.root.style.height = height + 'px'
    }

    // console.log('scroll', this.root.style.top, scrollTop)

    // if (scrollTop > 50) {
    //   this.root.style.trans = scrollTop + 'px'
    // } else {
    //   this.root.style.top = scrollTop + 'px'
    // }
    // }
      // this.root.style.top = scrollTop + 'px'
      // this.root.style.height = this.size - scrollTop
    // } else {
    //   console.log('size scroll', this.size, scrollTop)

    //   this.root.style.height = this.size - scrollTop + 'px'
    //   // this.root.style.top = scrollTop + 'px'
    // }
  }

  fixed (e, scrollTop) {
    if (scrollTop > 0) {
      this.root.style.transform = 'translateY(' + scrollTop + 'px)'
    } else {
      this.root.style.transform = 'translateY(' + scrollTop + 'px)'
    }
  }

  waterfall$ (e) {}
}

export default Toolbar
