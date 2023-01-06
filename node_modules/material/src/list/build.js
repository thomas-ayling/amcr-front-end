import observer from '../module/observer'
import dataset from '../view/dataset'

import Layout from '../layout'
import Virtual from './virtual'

export default {
  build (data) {
    // console.log('options', this.options.layout)

    this.root = document.createElement('div')
    this.root.classList.add('list')
    this.root.classList.add(this.options.class)

    this.root.addEventListener('click', (e) => {
      e.stopPropagation()
    })

    if (this.options.data) {
      dataset(this.root, this.options.data)
    }

    this.layout = new Layout(this.options.layout.main, this.root)
    this.ui = this.layout.component

    if (this.options.container) {
      this.options.container.appendChild(this.root)
      this.show()
      this.buildVirtual()
      // console.log('form', this.root)
    } else {
      this.inserted = true
      observer.insert(this.root, () => {
        this.buildVirtual()
        this.inserted = true
      })
    }
  },

  buildVirtual () {
    // console.log('buildVirtual', this.options.class)
    var height = 80

    if (this.options.item && this.options.item.height) {
      height = this.options.item.height
    }

    this.virtual = new Virtual({
      container: this.ui.body,
      itemHeight: height,
      render: (i) => {
        // console.log('render', this.data[i])
        return this.renderItem(this.data[i])
      }
    })
  }
}
