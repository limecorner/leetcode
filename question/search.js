
const array = [5, 8, 1, 100, 12, 3, 12]
const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) return i
  }
  return -1
}

const binarySearch = (arr, val) => {
  let l = 0
  let r = arr.length - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (arr[mid] === val) {
      return mid
    } else if (arr[mid] < val) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
}

const i = binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 4)

// 先寫出這些
const naiveStringSearch = (longS, shortS) => {
  let count = 0
  // 先寫出 for (let i = 0; i < longS.length ; i++) {
  // 最後才處理 longS.length - shortS.length + 1
  for (let i = 0; i < longS.length - shortS.length + 1; i++) {
    // let subStringCount = true
    let j = 0
    for (;j < shortS.length; j++) {
      if (longS[i + j] !== shortS[j]) {
        // subStringCount = false
        break
      }
      // when count++
    }
    if (j === shortS.length) count++
    // if (subStringCount) count++
  }
  return count
}

const subStringCount = naiveStringSearch('wowomgzomg', 'omg')

module.exports = { i, subStringCount }
