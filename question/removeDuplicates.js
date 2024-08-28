const e = require('express')

const arr = [1, 1, 2, 3, 3]
// const removeDuplicates = arr => {
//   const unique = arr.reduce((accu, curr) => {
//     const isExist = accu.includes(curr)
//     if (!isExist) accu.push(curr)
//     // if(accu.indexOf(curr) < 0) accu.push(curr)
//     return accu
//   }, [])
//   return unique
// }

// const removeDuplicates = arr => {
//   const set = new Set(arr)
//   console.log('set', set)
//   // const uniqueArr = [...set]
//   const uniqueArr = Array.from(set)
//   console.log('uniqueArr', uniqueArr)
//   return uniqueArr
// }

// const removeDuplicates = arr => {
//   const uniqueArray = arr.filter((value, index, self) => {
//     console.log(('value', value))
//     console.log(('index', index))
//     console.log(('self', self))
//     return self.indexOf(value) === index
//   })
//   return uniqueArray
// }

const removeDuplicates = arr => {
  const mapRes = arr.map((e, i) => [e, i])
  console.log(mapRes)
  const map = new Map(mapRes)
  console.log('map', map)
  const keys = map.keys()
  console.log('keys', keys)

  return [...new Map(arr.map(e => [e, e])).keys()]
}

// const removeDuplicateObjects = arr => {
//   const uniqueArr = arr.reduce((accu, curr) => {
//     if (!accu.some(item => item.id === curr.id)) accu.push(curr)
//     return accu
//   }, [])
//   return uniqueArr
// }

const removeDuplicateObjects = arr => {
  const newArray = arr.map(m => [m.id, m])
  // Because the keys of a Map object are unique,
  // creating a Map from the array of array removes the duplicate object by key
  const newMap = new Map(newArray)
  const iterator = newMap.values()
  const unique = [...iterator]
  console.log('newArray', newArray)
  console.log('newMap', newMap)
  console.log('iterator', iterator)
  console.log('unique', unique)

  // const unique = [...new Map(members.map((m) => [m.id, m])).values()];

  return unique
}

const uniqueBy = (arr, prop) => {
  return [...new Map(arr.map(m => [m[prop], m])).values()]
}

// const arrPlus = (arr1, arr2) => {
//   let a1 = 0
//   let a2 = 0
//   const newArray = []

//   for (let i = 0; i < arr1.length; i++) {
//     a1 += arr1[i] * Math.pow(10, arr1.length - 1 - i)
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     a2 += arr2[i] * Math.pow(10, arr2.length - 1 - i)
//   }
//   let sum = a1 + a2
//   console.log('sum', sum)

//   const sumLength = String(sum).length
//   console.log('sumLength', sumLength)

//   for (let i = 0; i < sumLength; i++) {
//     const num = sum % 10
//     console.log('num', num)
//     newArray.unshift(num)
//     sum -= num
//     sum /= 10
//   }

//   return newArray
// }

const members = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'Johnny' },
  { id: 4, name: 'Alice' }
]

module.exports = {
  arr,
  removeDuplicates,
  members,
  removeDuplicateObjects,
  uniqueBy
}
