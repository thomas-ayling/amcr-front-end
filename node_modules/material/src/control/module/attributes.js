const special = ['required', 'disabled']

function setAttributes (element, o) {
  // console.log('attributes', o.attributes, element)

  for (var i = 0; i < o.attributes.length; i++) {
    var attribute = o.attributes[i]

    if (o[attribute] && o[attribute] !== 'undefined') {
      if (special.indexOf(attribute) > -1) {
        element.setAttribute(attribute, attribute)
      } else {
        element.setAttribute(attribute, o[attribute])
      }
    }
  }
}

export default setAttributes
