
const array = [1, 1, 2, 3]
// 1. frequencyCounter
const frequencyCounter = arr => {
  const obj = {}
  for (const val of arr) {
    // if (obj[val]) {
    //   obj[val]++
    // } else {
    //   obj[val] = 1
    // }
    obj[val] = (obj[val] || 0) + 1
  }
  return obj
}
const frequencyCounter1 = frequencyCounter(array)
const array1 = [2, 1, 2, 3, 9]
const array2 = [1, 4, 9, 4]
function same (arr1, arr2) {
  const obj1 = frequencyCounter(arr1)
  const obj2 = frequencyCounter(arr2)
  for (const key in obj1) {
    if (!(key ** 2 in obj2)) return false
    if (obj1[key] !== obj2[key ** 2]) return false
  }
  return true
}

const res = same(array1, array2)

function validAnagram (str1, str2) {
  // str1.len!==str2.len -- false
  if (str1.length !== str2.length) return false
  // str1==='' && str2==='' -- true
  if (str1 === '' && str2 === '') return true
  // 'aaz'-> obj= {a:2,z:1}
  const obj = frequencyCounter(str1)
  console.log('obj', obj)
  // loop str2, for each char
  for (let j = 0; j < str2.length; j++) {
    // console.log('char', str2[j])
    // char in obj ->
    //  1. obj[char]==0 -- false // char a in {a:0}
    //  2. obj[char]>0, obj[char]--
    const char = str2[j]
    console.log('char', char)
    console.log('char in obj?', char in obj)

    if (char in obj) {
      if (obj[char] === 0) {
        return false
      } else { obj[char]-- }
    }
    // char not in obj -- false
    else {
      return false
    }
  }
  return true
}

const isAnagram = validAnagram('waaz', 'lzza')
// isAnagram = validAnagram('awesome', 'awesom') // false
// isAnagram = validAnagram('qwerty', 'qeywrt') // true
// isAnagram = validAnagram('texttwisttime', 'timetwisttext') // true

// 2. MULTIPLE POINTERS
function sumZero (arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === 0) return [arr[left], arr[right]]
    if (sum < 0) {
      left++
    } else {
      right--
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3])

function countUniqueValues1 (arr) {
  let left = 0
  let right = 1
  let count = 1
  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++
    } else {
      left = right
      right++
      count++
    }
  }
  return count
}
function countUniqueValues2 (arr) {
  if (arr.length === 0) return 0
  // if(arr.length===1) return 1
  let left = 0
  let right = 1
  while (right < arr.length) {
    // if (arr[left] === arr[right]) {
    //   right++
    // } else {
    //   left++
    //   arr[left] = arr[right]
    //   right++
    // }
    if (arr[left] !== arr[right]) {
      left++
      arr[left] = arr[right]
    }
    right++
  }
  return left + 1
}

const uniqueValues = countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
module.exports = { frequencyCounter1, res, isAnagram, uniqueValues }
