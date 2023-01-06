'use strict'

import create from './component/create'
import insert from './component/insert'
import emitter from './module/emitter'

import offset from './element/offset'

import List from './list'
import Button from './button'
import Divider from './divider'

const defaults = {
  prefix: 'material',
  class: 'tabs',
  tag: 'div',
  indicator: {
    prefix: 'material',
    class: 'indicator',
    tag: 'div'
  }
}

class Tabs {
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.init(options)
    this.build()

    return this
  }

  init (options) {
    this.options = Object.assign({}, defaults, options || {})
    Object.assign(this, insert, emitter)
  }

  /**
   * Build Method
   * @return {Object} This class instance
   */
  build () {
    this.root = create(this.options)
    this.tab = { }
    if (this.options.list) {
      this.list = new List({
        // root: this.root,
        tag: 'div',
        list: this.options.list,
        target: '.material-button',
        height: 600,
        label: 'Flat',

        render: (info) => {
          var item
          if (info.type === 'divider') {
            item = new Divider()
          } else {
            item = new Button({
              name: info.name,
              text: info.text || info.name,
              tooltip: info.tootip
            })
          }

          this.tab[info.name] = item

          return item
        },
        select: (item) => {
          this.selected = item
          this.click(item)
        }
      }).insert(this.root)
    }

    this.indicator = create(this.options.indicator)
    this.insertElement(this.indicator, this.root)

    if (this.options.container) {
      this.insert(this.options.container)
    }

    return this
  }

  select (tab) {
    // console.log('select', tab, this.tab)
    this.selected = this.tab[tab]
    this.click(this.selected.root, true)
  }

  click (item, silent) {
    // console.log('clickitem', item, this.root);
    var or = offset(this.root)
    var o = offset(item)
    this.indicator.setAttribute('style', 'width: ' + o.width + 'px; left: ' + (o.left - or.left) + 'px;')

    if (!silent) { this.emit('select', item.dataset.name) }
  }
}

export default Tabs
