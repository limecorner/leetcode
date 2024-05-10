const express = require('express')
const app = express()

// const {
//   arr,
//   removeDuplicates,
//   members,
//   removeDuplicateObjects
// } = require('./question/removeDuplicates')
const {
  simpleSLL, formSLL, printSLL, sllFilter, isSmallEnough, isEven
} = require('./question/SLL')
const {
  countDown, sum, faccollectOddValues, collectOddValues, power, productOfArray, fib
} = require('./question/recursion')
const {
  checkValidString, checkValidString2, checkValidStringRecursive
} = require('./question/stack')
// 設定 port 3000
app.listen(3000, () => {
  // console.log('App is running on http://localhost:3000')
  // console.log('arr', arr)
  // console.log('removeDuplicates arr', removeDuplicates(arr))
  // console.log('members', members)
  // console.log('removeDuplicateObjects members', removeDuplicateObjects(members))
  // console.log('simpleSLL array format', printSLL(simpleSLL))
  // console.log('formedSLL', formSLL(2, 7))
  console.log('formedSLL array format', printSLL(formSLL(3, 15)))
  console.log('sllFilter', printSLL(sllFilter(formSLL(3, 15), isEven)))
})
