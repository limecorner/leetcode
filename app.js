const express = require('express')
const app = express()

// const {
//   arr,
//   removeDuplicates,
//   members,
//   removeDuplicateObjects
// } = require('./question/removeDuplicates')
const {
  simpleSLL, formSLL, printSLL, sllFilter, isSmallEnough, isEven, sllMap, mutiply, sllForEach, printMutiply
} = require('./question/SLL')
const {
  countDown, sum, faccollectOddValues, collectOddValues, power, productOfArray, fib
} = require('./question/recursion')
const {
  checkValidString, checkValidString2, checkValidStringRecursive
} = require('./question/stack')
// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
  console.log('simpleSLL', simpleSLL)
  console.log('simpleSLL array format', printSLL(simpleSLL))
  console.log('formSLL', formSLL(2, 5))
  console.log('formSLL array format', printSLL(formSLL(2, 5)))
  console.log('filter', printSLL(sllFilter(formSLL(3, 15), isEven)))
  console.log('map array format', printSLL(sllMap(formSLL(2, 5), mutiply)))
  sllForEach(formSLL(2, 5), printMutiply)
  // console.log(checkValidString('acd(e))ef'))
  // console.log(checkValidString('))'))

  // console.log('removeDuplicates arr', removeDuplicates(arr))
  // console.log('members', members)
  // console.log('removeDuplicateObjects members', removeDuplicateObjects(members))
})
