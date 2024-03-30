const express = require('express')
const app = express()

const removeDuplicates = arr => {
  const unique = arr.reduce((accu, curr) => {
    const isExist = accu.includes(curr)
    if (!isExist) accu.push(curr)
    // if(accu.indexOf(curr) < 0) accu.push(curr)
    return accu
  }, [])
  return unique
}

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

const removeDuplicateObjects = arr => {
  const uniqueArr = arr.reduce((accu, curr) => {
    if (!accu.some(item => item.id === curr.id)) accu.push(curr)
    return accu
  }, [])
  return uniqueArr
}

// const removeDuplicateObjects = arr => {
//   const newArray = arr.map(m => [m.id, m])
//   // Because the keys of a Map object are unique, 
//   // creating a Map from the array of array removes the duplicate object by key
//   const newMap = new Map(newArray)
//   const iterator = newMap.values()
//   const unique = [...iterator]
//   console.log('newArray', newArray)
//   console.log('newMap', newMap)
//   console.log('iterator', iterator)
//   console.log('unique', unique)

//   // const unique = [...new Map(members.map((m) => [m.id, m])).values()];

//   return unique
// }

const uniqueBy = (arr, prop) => {
  return [...new Map(arr.map(m => [m[prop], m])).values()]
}

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
  const arr = [1, 2, 2, 3, 4, 4, 5]
  const arr2 = removeDuplicates(arr)
  console.log('arr2', arr2)
  const members = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'Johnny' },
    { id: 4, name: 'Alice' }
  ]
  console.log('members', removeDuplicateObjects(members))
  console.log('members uniqueBy', uniqueBy(members, 'id'))
})
