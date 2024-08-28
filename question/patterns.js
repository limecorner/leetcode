
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

let res = same(array1, array2)

function validAnagram (str1, str2) {
  // str1.len!==str2.len -- false
  if (str1.length !== str2.length) return false
  // str1==='' && str2==='' -- true
  if (str1 === '' && str2 === '') return true
  // 'aaz'-> obj= {a:2,z:1}
  const obj = frequencyCounter(str1)
  // console.log('obj', obj)
  // loop str2, for each char
  for (let j = 0; j < str2.length; j++) {
    // console.log('char', str2[j])
    // char in obj ->
    //  1. obj[char]==0 -- false // char a in {a:0}
    //  2. obj[char]>0, obj[char]--
    const char = str2[j]
    // console.log('char', char)
    // console.log('char in obj?', char in obj)

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

// 3. SLIDING WINDOW
function maxSubarraySum (arr) {

}

// sameFrequency
// to String
// compare len
// no -- false

// loop num1 -> fre counter obj: {1:2, 2:4}
// loop num2, for each num
// num not in obj -- false

// num in obj
//    1. obj[num]===0 {1:0, 2:1} --false
//    2. obj[num]--
function sameFrequency (num1, num2) {
  const str1 = String(num1)
  const str2 = String(num2)
  if (str1.length !== str2.length) return false

  const obj = {}
  for (let i = 0; i < str1.length; i++) {
    const num = str1[i]
    obj[num] = (obj[num] || 0) + 1
  }
  for (let j = 0; j < str2.length; j++) {
    const num = str2[j]
    // if (num in obj) {
    //   if (obj[num] === 0) {
    //     return false
    //   } else {
    //     obj[num]--
    //   }
    // } else {
    //   return false
    // }
    if (!obj[num]) {
      return false
    } else {
      obj[num]--
    }
  }
  return true
}
res = sameFrequency(1423, 2314)

// function areThereDuplicates () {
//   const obj = {}
//   for (const i in arguments) {
//     const val = arguments[i]
//     obj[val] = (obj[val] || 0) + 1
//     if (obj[val] === 2) return true
//   }
//   return false
// }

function areThereDuplicates (...args) {
  // console.log('args', args)

  args.sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
  // console.log('args', args)
  let l = 0
  let r = 1
  while (r < args.length) {
    if (args[l] === args[r]) return true
    l++
    r++
  }
  return false
}
res = areThereDuplicates(1, 2, 5, 3, 8, 3, 5)

function averagePair (arr, target) {
  const realTarget = target * 2
  let l = 0
  let r = arr.length - 1
  while (l < r) {
    const sum = arr[l] + arr[r]
    if (sum === realTarget) {
      return true
    } else if (sum < realTarget) {
      l++
    } else {
      r--
    }
  }
  return false
}
// res = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)

// s1 shorter string
// function isSubsequence (s1, s2) {
//   if (s1.length > s2.length) return false
//   let i = 0
//   let j = 0
//   while (j < s2.length) {
//     if (s1[i] === s2[j]) {
//       i++
//     }
//     if (i === s1.length) return true
//     j++
//   }
//   return false
// }
// function isSubsequence (s1, s2) {
//   if (s1.length > s2.length) return false
//   let i = 0
//   let j = 0
//   while (j < s2.length) {
//     if (s1[i] === s2[j]) {
//       i++
//     }
//     if (i === s1.length) return true
//     j++
//   }
//   return false
// }
// 第一次解，沒寫到 return
// function isSubsequence (s1, s2) {
//   if (s1.length > s2.length) return false
//   if (s1.length === 1 && s1[0] === s2[0]) return true
//   if (s2.length === 1) return false
//   if (s1[0] === s2[0]) {
//     isSubsequence(s1.substring(1), s2.substring(1))
//   } else {
//     isSubsequence(s1, s2.substring(1))
//   }
// }
function isSubsequence (str1, str2) {
  if (str1.length === 0) return true
  if (str2.length === 0) return false
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}
res = isSubsequence('abc', 'abracadabra')

const minSubArrayLen = function (target, nums) {
  let l = 0
  let r = 0
  let sum = nums[l]
  let minSize = 10 ** 5
  while (r < nums.length) {
    if (sum >= target) {
      const tempSize = r - l + 1
      if (tempSize < minSize) minSize = tempSize
      sum -= nums[l]
      l++
    } else {
      r++
      sum += (nums[r] || 0)
    }
  }
  minSize = minSize === 10 ** 5 ? 0 : minSize
  return minSize
}

const lengthOfLongestSubstring = function (s) {

}

module.exports = { frequencyCounter1, res, isAnagram, uniqueValues }
