import extract from './extract'

/**
 * attach function to events
 * @module module/attach
 * @category module
 */

/**
 * [attach description]
 * @param  {object} component [description]
 * @param  {[type]} events    [description]
 * @return {[type]}           [description]
 */
export default {
  attach: function (events) {
    // console.log('attach', events)
    events = events || this.options.events
    if (!events) return

    // console.log('attach', events, this)
    var instance = this
    events.map((def) => {
      var e = extract.e(instance, def[0])
      var f = extract.f(instance, def[1])

      var keys = def[1].split('.')

      keys.pop()
      var bound = this.last(keys.join('.'))

      if (f && bound && e && e.element && e.element.addEventListener) {
        if (!f) { console.log('error') }
        e.element.addEventListener(e.name, f.bind(bound))
      } else if (e && e.element && e.element.on && f && bound) {
        e.element.on(e.name, f.bind(bound))
      } else {
        console.log('can\'t attach', def[0])
      }
    })

    return this
  },

  /**
   * Return the last reference from an object
   * @param  {string} str Object path for example key1.key2.key3
   * @return {value} The value of the last reference
   */
  last: function (str) {
    // console.log('_path', str)
    if (!str) return this
    else if (!str.match(/\./)) return this[str]
    var last

    var keys = str.split('.')
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i]

      last = last || this
      last = last[key]
    }

    return last
  }
}
