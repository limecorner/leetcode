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

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
  const arr = ['b', 'a', 'c', 'a', 'b', 'b']
  const arr2 = removeDuplicates(arr)
  console.log('arr2', arr2)
})
