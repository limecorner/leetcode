const unorderArray = [2, 1, 9, 76, 4]
// [8, 6, 10]
// [2, 1, 9, 76, 4]
// [5, 3, 4, 1, 2]
// const unorderArray = [5, 1, 2, 3, 4]
const unorderArray2 = [5, 1, 2, 3, 4]

const bubble1 = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}
const bubble2 = arr => {
  for (let i = arr.length; i > 1; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}
const bubbleOptimize = arr => {
  let noSwaps
  for (let i = arr.length; i > 1; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
}
const selection = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    // let min = arr[i]
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        // min = arr[j]
        minIndex = j
      }
    }
    console.log(i, minIndex);
    //
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
}
const insertion = arr => {
  // let currVal;
  for (let i = 1; i < arr.length; i++) {
    // currVal = arr[i]
    const currVal = arr[i]
    let j = i - 1
    for (j; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currVal
  }
}

module.exports = { unorderArray, unorderArray2, bubble1, bubble2, bubbleOptimize, selection, insertion }
