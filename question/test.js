const arr = [1, 2, 2, 3, 4, 4, 5]
const members = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'Johnny' },
  { id: 4, name: 'Alice' }
]

const array1 = [1, 3, 9]
const array2 = [8, 6, 5]

const plusArr = (a1, a2) => {
  // [8, 6, 1]
  //       [9]
  // 1. [9]->[0 0]-> [0 0 9]
  let length = a1.length
  if (a1.length > a2.length) {
    const temp = new Array(length - a2.length).fill(0)
    a2 = [...temp, ...a2]
  } else {
    length = a2.length
    const temp = new Array(length - a1.length).fill(0)
    a1 = [...temp, ...a1]
  }

  const result = []
  let carry = 0
  // len=3
  for (let i = length - 1; i >= 0; i--) { // 2 1 0
    const eachSum = a1[i] + a2[i] + carry
    if (eachSum >= 10) {
      carry = 1
    } else {
      carry = 0
    }
    result[i] = eachSum % 10
  }
  if (carry) result.unshift(1)
  return result
  // 2. for len-1~0
  //        i=2
  //        eachSum = a1[i] + a1[i]  ex: 12
  //        1)   >= 10 => carry=1, result[i]=eachSum % 10
  //        2)    < 10 => result[i]=eachSum
  //        i=1
  //        eachSum = a1[i] + a1[i] + carry
  //        1)   >= 10 => carry=1, result[i]=eachSum % 10
  //        2)    < 10 => result[i]=eachSum
  //        i=0
  //        eachSum = a1[i] + a1[i] + carry
  //        1)   >= 10 => carry=1, result[i]=eachSum % 10
  //        2)    < 10 => result[i]=eachSum
  //
  //        carry==1 => result.unshift(1)
}

module.exports = { arr, members, array1, array2, plusArr }
