import { is as isObject } from './module/object'
import css from './module/css'
import insert from './element/insert'

/**
 *
 */
class Layout {
  /**
   * [constructor description]
   * @param  {?} schema    [description]
   * @param  {?} container [description]
   * @return {?}           [description]
   */
  constructor (schema, container) {
    this.component = this.create(schema, container)
    // this.field = this.extractInfo(this.component)

    return this
  }

  /**
   * [create description]
   * @param  {?} schema    [description]
   * @param  {?} container [description]
   * @param  {?} structure [description]
   * @return {?}           [description]
   */
  create (schema, container, structure, level) {
    level = level || 0
    level++

    // console.log('level', level, schema)
    // console.log('-------------')

    structure = structure || {}
    let component = null

    for (var i = 0; i < schema.length; i++) {
      // console.log('index', i, typeof schema[i])
      var name
      var options = {}

      if (schema[i] instanceof Object &&
        typeof schema[i] === 'function') {
        if (isObject(schema[i + 2])) {
          options = schema[i + 2]
        }

        if (typeof schema[i + 1] === 'string') {
          name = schema[i + 1]
          if (!schema[i].isElement && !schema[i].isComponent) {
            options.name = name
          }
        }

        component = new schema[i](options)

        if (name) {
          structure[name] = component
        }

        if (component) {
          this.display(component.root, options)
          this.style(component, options)
        }

        if (level === 1) {
          var isClass = fn => /^\sclass/.test(schema[i].toString())

          // console.log('isClass', isClass)
          // console.log('root', component.root)
          structure.root = component.root
        }

        if (component && container) {
          if (component.insert) component.insert(container)
          else insert(component, container)
          component._container = container
        }
      } else if (Array.isArray(schema[i])) {
       // console.log('------', schema[i])
        if (component == null) {
          component = container
        }
        this.create(schema[i], component, structure, level)
      }
    }

    return structure
  }

  /**
   * [_initFlexDirection description]
   * @param  {Element} container Init direction for the given container
   * @param  {string} direction (horizontal,vertical)
   */
  display (element, options) {
    var display = options.display
    var direction = options.direction || 'horizontal'

    if (!element || !display) return

    if (direction === 'horizontal') {
      element.className += ' ' + 'flex-row'
    } else if (direction === 'vertical') {
      element.className += ' ' + 'flex-column'
    }
  }

  /**
   * [style description]
   * @param  {?} component [description]
   * @return {?}           [description]
   */
  style (component) {
    var options = component.options || {}

    // console.log('component', component);

    if (options.flex) {
      css.add(component.root, 'flex-' + options.flex)
    } else {
      var size = options.size
      if (options.size && options.width) {
        component.root.width = size + 'px'
      } else if (options.size && options.height) {
        component.root.height = size + 'px'
      }
    }

    if (options.position) {
      component.root.position = options.position
    }

    if (options.bottom) {
      component.root.bottom = options.bottom
    }

    if (options.hide) {
      component.root.display = 'none'
    }

    if (options.theme) {
      css.add(component.root, 'theme' + '-' + options.theme)
    }
  }

  extractInfo (object) {
    // console.log('extractField', object)

    var field = {}

    for (var property in object) {
      if (object.hasOwnProperty(property)) {
        var infos = property.split(/\./)

        if (infos[0] === 'info' && infos[1] !== undefined) {
          // console.log('field', infos[0], infos[1])
          field[infos[1]] = object[property]
        }
      }
    }

    console.log('--- field', field)

    return field
  }

  /**
   * [get description]
   * @param  {?} name [description]
   * @return {?}      [description]
   */
  get (name) {
    if (name) return this.component[name]
    else return this.component
  }
}

export default Layout
