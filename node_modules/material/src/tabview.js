import emitter from './module/emitter'
import observer from './module/observer'

/**
 * Class Tab
 * @class
 * @since 0.0.1
 * @example
 * var tab = new TabView()
 */

var defaults = {
  class: 'tabview',
  mode: 'style' // css
}

class TabView {
  /**
   * The init method of the Button class
   * @param  {Object} The element attributes
   * @private
   * @return {DOMElement} The dom element
   */
  constructor (options) {
    this.options = Object.assign({}, defaults, options || {})
    Object.assign(this, emitter)

    this.build()

    observer.insert(this.root, () => {
      this.setup()
      this.attach()
    })

    return this
  }

  build () {
    this.root = document.createElement(this.options.tag || 'div')
    this.root.classList.add(this.options.class)

    this.ui = {}
  }

  setup () {
    // console.log('setup')
    this.view = {}
    this.views = []

    this.ui.tabs = this.root.querySelector('[class="tabs"]')
    this.ui.view = this.root.querySelector('[class="views"]')
    this.ui.indicator = this.root.querySelector('[class="indicator"]')

    this.ui.buttons = this.ui.tabs.childNodes
    this.ui.views = this.ui.view.childNodes

    for (var i = 0; i < this.ui.views.length; i++) {
      if (this.ui.views[i].dataset) {
        this.views.push(this.ui.views[i].dataset.view)
        this.view[this.ui.views[i].dataset.view] = this.ui.views[i]
      }
    }

    this.hideView()

    this.click(this.ui.buttons[0])
  }

  attach () {
    this.ui.tabs.addEventListener('click', (e) => {
      e.stopPropagation()
      if (e.target === e.currentTarget) return

      if (e.target.matches('BUTTON')) {
        this.click(e.target)
      }
    })
  }

  select (view) {
    // console.log('select', view, this.ui.tabs)
    var button = this.ui.tabs.querySelector('[data-view="' + view + '"]')
    // console.log('tab', button)
    if (button) {
      this.click(button)
    }
  }

  hideView () {
    for (var i = 0; i < this.ui.views.length; i++) {
      this.ui.views[i].classList.add('hide')
    }
  }

  click (button) {
    // console.log('click', button.dataset.view)
    var view = this.ui.view.querySelector('[data-view="' + button.dataset.view + '"]')
    this.hideView()

    button.classList.add('selected')

    if (this.button) {
      this.button.classList.remove('selected')
    }

    this.indicator(button)

    if (view) {
      // console.log('view block', view)
      view.classList.remove('hide')
    } else {
      console.log('view ', button.dataset.view, button, this.ui.views, ' not found')
    }

    this.emit('select', button.dataset.view)

    this.button = button

    return view
  }

  indicator (button) {
    if (!this.ui.indicator) return

    var t = this.ui.tabs.getBoundingClientRect()
    var b = button.getBoundingClientRect()

    // console.log('tab rect', b.height, b.height)

    this.ui.indicator.style.top = t.height - 2 + 'px'
    this.ui.indicator.style.left = (b.left - t.left) + 'px'
    this.ui.indicator.style.width = b.width + 'px'
  }
}

export default TabView
