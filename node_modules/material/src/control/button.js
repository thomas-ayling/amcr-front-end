import emitter from '../module/emitter'
import dataset from '../view/dataset'

const defaults = {
  class: 'button',
  tag: 'button',
  styles: ['style', 'color'],
  components: ['label', 'icon'],
  component: {
    label: {
      tag: 'label'
    },
    icon: {
      tag: 'i'
    }
  }
}

class Button {
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
    Object.assign(this, emitter)
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

    if (this.options.class !== 'button') {
      this.root.classList.add('button')
    }

    this.root.classList.add(this.options.class)
    this.styleAttributes()

    if (this.options.text) {
      this.root.innerHTML = this.options.text
    }

    if (this.options.data) {
      dataset(this.root, this.options.data)
    }

    this.buildComponent()

    if (this.options.type) {
      this.root.setAttribute('type', this.options.type)
    } else {
      this.root.setAttribute('type', 'button')
    }

    if (this.options.name) {
      this.root.setAttribute('name', this.options.name)
    }

    if (this.options.case) {
      this.root.classList.add(this.options.case + '-case')
    }

    if (this.options.container) {
      this.options.container.appendChild(this.root)
    }

    return this
  }

  buildComponent () {
    this.ui = this.ui || {}

    for (var i = 0; i < this.options.components.length; i++) {
      var component = this.options.components[i]

      if (!this.options[component]) continue

      var tag = 'div'
      if (this.options.component && this.options.component[component]) {
        tag = this.options.component[component].tag || tag
      }

      this.ui[component] = document.createElement(tag)

      if (component === 'label' || component === 'icon') {
        this.ui[component].innerHTML = this.options[component]
      }

      this.root.appendChild(this.ui[component])
    }
  }

  styleAttributes () {
    if (this.options.style) {
      this.root.classList.add('style-' + this.options.style)
    }

    if (this.options.color) {
      this.root.classList.add('color-' + this.options.color)
    }

    if (this.options.bold) {
      this.root.classList.add('bold')
    }
  }

  attach () {
    this.root.addEventListener('click', (ev) => {
      this.emit('click', ev)
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
      case 'value':
        this.root.value = value
        break
      case 'label':
        if (this.ui.label) {
          this.ui.label.innerHTML = value
        }
        break
      default:
        this.root.value = value
    }

    return this
  }

  /**
   * Setter
   * @param {string} prop
   * @param {string} value
   * @return {Object} The class instance
   */
  get (prop, value) {
    switch (prop) {
      case 'value':
        return this.root.value
      case 'label':
        return this.ui.label.innerHTML
      default:
        return this.root.value
    }
  }

  disable () {
    this.root.disabled = true
  }

  enable () {
    this.root.disabled = false
  }

  destroy () {
    this.root.parentNode.removeChild(this.root)
  }
}

export default Button
