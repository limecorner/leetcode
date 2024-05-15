const unorderArray = [5, 3, 4, 1, 2]
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
  for (let i = arr.length; i > 1; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
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

module.exports = { unorderArray, unorderArray2, bubble1, bubble2, bubbleOptimize, selection }
