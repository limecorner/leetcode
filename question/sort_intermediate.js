// Quick sort
// Version with ES2015 Syntax
// why                          end?
function pivot (arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  // We are assuming the pivot is always the first element
  const pivot = arr[start]
  let swapIdx = start

  // pivot(arr, 0,     1)
  //           start   end
  for (let i = start + 1; i <= end; i++) {
    // i = start + 1 -> 1
    //                      1 <= 1 有 -> 進到 statement
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx)
  return swapIdx
}
function quickSort (arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right) // 3
    // left
    quickSort(arr, left, pivotIndex - 1)
    // right
    quickSort(arr, pivotIndex + 1, right)
  }
  // return arr
  // return
}

function merge (a1, a2) {
  const res = []
  let i = 0
  let j = 0
  while (i < a1.length && j < a2.length) {
    if (a1[i] <= a2[j]) {
      res.push(a1[i])
      i++
    } else {
      res.push(a2[j])
      j++
    }
  }
  while (i < a1.length) {
    res.push(a1[i])
    i++
  }
  while (j < a2.length) {
    res.push(a2[j])
    j++
  }
  return res
}
function mergeSort (arr) {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

// const arr = [4, 6, 9, 1, 2, 5]
const arr = [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]

// console.log(arr)
// const sortedArray = mergeSort(arr)
// console.log(sortedArray)

module.exports = {
  arr
}
