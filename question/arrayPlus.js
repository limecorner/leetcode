const array1 = [8, 6, 1]
const array2 = [9]

const plusArr = (a1, a2) => {
  // [8, 6, 1]
  // i
  //       [9]

  //  1.  [0 0 9]
  // [0 0] + [9]
  // res = []
  // sum>=10
  // carry=1
  // res.unshfit(sum%10)
  // sum<10 carry=0

  // for end
  // carry=1
  // res.unshfit(1)
  const res = []
  const lenOfZero = a1.length - a2.length
  let carry = 0
  // wait
  const arr = Array(lenOfZero).fill(0) // [0 0]
  // const arr = [0, 0]
  a2 = [...arr, a2]
  for (let i = a1.length - 1; i >= 0; i--) {
    const sum = a1[i] + a2[i] + carry
    res.unshift(sum % 10)
    if (sum >= 10) {
      carry = 1
    } else {
      carry = 0
    }
  }
  if (carry) {
    res.unshift(1)
  }
  return res
}

// const plusArr = (a1, a2) => {
//   // [8, 6, 1]
//   //       [9]

//   // 1. [0 0 9] -> [0 0] + [9]
//   let length = a1.length
//   if (length > a2.length) {
//     const temp = Array(length - a2.length).fill(0)
//     a2 = [...temp, ...a2]
//   } else {
//     length = a2.length
//     const temp = Array(length - a1.length).fill(0)
//     a1 = [...temp, ...a1]
//   }

//   // 2. let carry=0
//   // result=[]
//   let carry = 0
//   const res = []
//   //  for
//   //    i=2
//   //    eachSum=a1[i] + a2[i] + carry  -> 10
//   //    a. eachSum >= 10 => carry = 1, result.push(eachSum%10)
//   //    b. eachSum < 10 => result.push(eachSum%10)
//   //    if(carry) res.push(1)
//   for (let i = length - 1; i >= 0; i--) { // 2 1 0
//     const eachSum = a1[i] + a2[i] + carry
//     if (eachSum >= 10) {
//       carry = 1
//     } else {
//       carry = 0
//     }
//     res.unshift(eachSum % 10)
//   }
//   // res.
//   //   1  1  1
//   //    [9 9 9]
//   //    [0 0 1]
//   //   1  0  0  0
//   if (carry) res.unshift(1)
//   return res
// }

// const arrPlus = (arr1, arr2) => {
//   // arr1 = [8, 6, 1]
//   // arr2 = [9]
//   const result = []
//   let i = arr1.length - 1 // Starting from the least significant digit
//   let j = arr2.length - 1

//   let carry = 0
//   // 運算到較長的陣列跑到 index 為 0
//   while (i >= 0 || j >= 0) {
//     // arr2[j] 不存在時，就 0
//     const sum = (arr1[i] || 0) + (arr2[j] || 0) + carry
//     carry = sum >= 10 ? 1 : 0
//     result.unshift(sum % 10)
//     console.log('result', result)
//     i--
//     j--
//   }
//   if (carry === 1) result.unshift(1)
//   return result
// }
