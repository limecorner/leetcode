const express = require('express')
const app = express()

// const {
//   arr,
//   removeDuplicates,
//   members,
//   removeDuplicateObjects
// } = require('./question/removeDuplicates')
const {
  formSLL, printSLL, sllFilter, isSmallEnough, isEven, sllMap, mutiply, sllForEach, printMutiply, node1, node3, reverseList, reverseListRecursive
} = require('./question/SLL')
const {
  countDown, sum, faccollectOddValues, collectOddValues, power, productOfArray, fib
} = require('./question/recursion')
const {
  checkValidString, checkValidString2, checkValidStringRecursive
} = require('./question/stack')
const {
  unorderArray, unorderArray2, bubble1, bubble2, bubbleOptimize, selection
} = require('./question/array')
// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
  console.log('unorderArray', unorderArray)
  selection(unorderArray)
  console.log('selection', unorderArray)

  // console.log('formSLL', formSLL(1, 3))
  // console.log('formSLL array format', printSLL(formSLL(1, 3)))
  // console.log('filter', printSLL(sllFilter(formSLL(3, 15), isEven)))
  // console.log('map array format', printSLL(sllMap(formSLL(2, 5), mutiply)))
  // sllForEach(formSLL(2, 5), printMutiply)
  // console.log('node3', node3)
  // console.log('node1', node1)
  // console.log('filter', (sllFilter(node1, isEven)))

  // const result = reverseList(node1)
  // console.log('result', result)
  // const result2 = reverseListRecursive(formSLL(1, 3))
  // console.log('result2', result2)

  // console.log(checkValidString('acd(e))ef'))
  // console.log(checkValidString('))'))

  // console.log('removeDuplicates arr', removeDuplicates(arr))
  // console.log('members', members)
  // console.log('removeDuplicateObjects members', removeDuplicateObjects(members))
})
