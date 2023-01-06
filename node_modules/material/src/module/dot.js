
function dot (obj) {
  var res = {}
  function recurse (obj, current) {
    for (var key in obj) {
      var value = obj[key]
      var newKey = (current ? current + '.' + key : key)
      if (value && typeof value === 'object') {
        recurse(value, newKey)
      } else {
        res[newKey] = value
      }
    }
  }

  recurse(obj)
  return res
}

export default dot
