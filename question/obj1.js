const obj = {
  a: 4,
  b: 2,
  c: 4,
  d: 3,
  e: 4
}

// Object.values(obj)
// [4, 2, 4, 3, 4]
function findKeyWithMaxValue (o) {
  const values = Object.values(o)
  // console.log('values', values)
  const maxValue = Math.max(...values)
  // console.log('values', values)
  const maxKeys = Object.keys(o).filter(key => o[key] === maxValue)
  // console.log('maxKeys', maxKeys)
}
const keyWithMaxValue = findKeyWithMaxValue(obj)

module.exports = {
  keyWithMaxValue
}
