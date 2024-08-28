function Node (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const bst1 = sortedArrayToBST([0, 1, 2, 3, 4, 5, 6, 7, 8])

function sortedArrayToBST (arr) {
  function helper (l, r) {
    if (l > r) return null
    const m = Math.floor((l + r) / 2)
    const root = new Node(arr[m])
    root.left = helper(l, m - 1)
    root.right = helper(m + 1, r)
    return root
  }
  return helper(0, arr.length - 1)
}

const obj = {
  a: 4,
  b: 2,
  c: 4,
  d: 3,
  e: 4
}

// Object.values(obj)
// [4, 2, 4, 3, 4]
function findKey (o) {
  const keys = Object.keys(o)
  // console.log('keys', keys)
  let modeKey = keys[0]
  // for (let i = 0; i < keys.length; i++) {
  //   console.log('i', i)
  // }
  // for (const key of keys) {
  //   // if(o[key]>)
  //   console.log('key', key)
  //   console.log('val', o[key])
  // }
  keys.forEach(key => {
    if (o[key] > o[modeKey]) {
      modeKey = key
      // console.log('modeKey', modeKey)
    }
    // console.log('key', key)
    // console.log('val', o[key])
  })
  return modeKey
}
// const resMode = findKey(obj)

module.exports = {
  bst1
}
