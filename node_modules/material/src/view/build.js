import dataset from './dataset'
import Layout from '../layout'

export default {
  build () {
    this.root = document.createElement('div')
    this.root.classList.add(this.options.class)
    this.root.classList.add('view')

    if (this.options.data) {
      dataset(this.root, this.options.data)
    }

    this.container = this.options.container || document.body
    this.container.appendChild(this.root)

    if (this.options.layout) {
      this.layout = new Layout(this.options.layout, this.root)
      this.ui = this.layout.component
    }
  }
}
