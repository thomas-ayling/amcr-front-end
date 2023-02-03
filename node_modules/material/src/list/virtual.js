import emitter from '../module/emitter'
import observer from '../module/observer'

const defaults = {
  class: 'virtual',
  width: '100%',
  height: '100%'

}

class Virtual {
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.options = Object.assign({}, defaults, options || {})
    Object.assign(this, emitter)

    this.items = this.options.items
    this.itemHeight = this.options.itemHeight
    this.render = this.options.render

    this.build()
    this.setup()
    this.attach()

    return this
  }

  build () {
    this.root = document.createElement('ul')
    this.root.classList.add(this.options.class)

    this.buildScroller()

    if (this.options.container) {
      this.options.container.appendChild(this.root)
    }
  }

  buildScroller () {
    // console.log('build')
    this.scroller = document.createElement('div')
    this.scroller.classList.add('scroller')
    this.root.appendChild(this.scroller)
  }

  setup () {
    // console.log('setup', this.root.offsetHeight, this.itemHeight)
    this.itemPerView = Math.ceil(this.root.offsetHeight / this.itemHeight)
    // console.log('itemPerView', this.itemPerView)
    this.maxBuffer = this.itemPerView * this.itemHeight
    // console.log('maxBuffer', this.maxBuffer)

    this.lastRepaintY = 0
    this.lastScrolled = 0

    return this
  }

  attach () {
    var self = this

    // As soon as scrolling has stopped, this interval asynchronouslyremoves all
    // the nodes that are not used anymore
    this.rmNodeInterval = setInterval(() => {
      if (Date.now() - this.lastScrolled > 100) {
        var badNodes = this.root.querySelectorAll('[data-rm="1"]')
        for (var i = 0, l = badNodes.length; i < l; i++) {
          this.root.removeChild(badNodes[i])
        }
      }
    }, 300)

    function onScroll (e) {
      // console.log('this.lastRepaintY', self.lastRepaintY)
      var scrollTop = e.target.scrollTop // Triggers reflow
      if (!this.lastRepaintY || Math.abs(scrollTop - self.lastRepaintY) > self.maxBuffer) {
        var first = parseInt(scrollTop / self.itemHeight) - self.itemPerView
        self._renderChunk(first < 0 ? 0 : first)
        self.lastRepaintY = scrollTop
      }

      this.lastScrolled = Date.now()
      e.preventDefault && e.preventDefault()
    }

    this.root.addEventListener('scroll', onScroll)

    // var refresh
    // window.onresize = () => {
    //   clearTimeout(refresh)
    //   refresh = setTimeout(() => {
    //     this.refresh()
    //   }, 300)
    // }
  }

  refresh () {
    this.itemPerView = Math.ceil(this.root.offsetHeight / this.itemHeight)
    this.maxBuffer = this.itemPerView * this.itemHeight

    return this
  }

  set (items) {
    // console.log('set', items)
    if (!items || Array.isArray(items) === false) {
      return
    }

    this.root.innerHTML = ''
    this.root.scrollTop = 0
    if (items.length < 1 || items === undefined) return

    this.buildScroller()

    this.items = items
    this.itemsCount = items.length

    this.setup()

    this.scroller.style.height = (this.itemHeight * this.itemsCount) + 'px'
    this.itemBuffer = this.itemPerView * 3

    this._renderChunk(0)
  }

  createRow (i) {
    // console.log('createRow', this.render)
    var item = this.render(i)

    item.classList.add('vrow')
    item.style.position = 'absolute'
    item.style.top = (i * this.itemHeight) + 'px'
    return item
  }

  _renderChunk (from) {
    // console.log('_renderChunk', from, this.root)
    var finalItem = from + this.itemBuffer
    if (finalItem > this.itemsCount) { finalItem = this.itemsCount }

    // Append all the new rows in a document fragment that we will later append to
    // the parent node
    var fragment = document.createDocumentFragment()

    // console.log('finalItem', finalItem)

    for (var i = from; i < finalItem; i++) {
      fragment.appendChild(this.createRow(i))
    }

    // Hide and mark obsolete nodes for deletion.
    for (var j = 1, l = this.root.childNodes.length; j < l; j++) {
      this.root.childNodes[j].style.display = 'none'
      this.root.childNodes[j].setAttribute('data-rm', '1')
    }

    // console.log('fragment', fragment)
    this.root.appendChild(fragment)
  }
}

export default Virtual
