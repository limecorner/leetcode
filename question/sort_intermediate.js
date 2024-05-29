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
let arr = [4, 6, 9, 1, 2, 5]
arr = [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]
quickSort(arr)
module.exports = {
  arr
}
