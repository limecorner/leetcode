const express = require('express')
const app = express()

const {
  // arr,
  removeDuplicates,
  // members,
  removeDuplicateObjects,
  uniqueBy
} = require('./question/removeDuplicates')
const {
  // formSLL, printSLL, sllFilter, isSmallEnough, isEven, sllMap, mutiply, sllForEach, printMutiply, node1, node3, reverseList, reverseListRecursive
} = require('./question/SLL')
const {
  countDown, sum, faccollectOddValues, collectOddValues, power, productOfArray, fib
} = require('./question/recursion')
const {
  checkValidString, checkValidString2, checkValidStringRecursive
} = require('./question/stack')
const {
  unorderArray, unorderArray2, bubble1, bubble2, bubbleOptimize, selection, insertion
} = require('./question/array')

const {
  arr, members, array1, array2, plusArr
} = require('./question/test')
const {
  frequencyCounter1, res, isAnagram, uniqueValues
} = require('./question/patterns')
const {
  i, subStringCount
} = require('./question/search')
const {
  // arr
} = require('./question/sort_intermediate')
const {
  // ht
} = require('./question/hashTable')
const {
  // q1, s1
} = require('./question/stack2')
const {
  // s
} = require('./question/StackusingQueues')
// const {
//   node1, node2, node3
// } = require('./question/FlattenNestedList')
const {
  sll
} = require('./question/SLLRec')
const {
  // node,result
} = require('./question/BST')
const {
  bst1, resMode
} = require('./question/BST2')
const {
  // resStr
} = require('./question/string1')
const {
  keyWithMaxValue
} = require('./question/obj1')
const {
  MajorityElement
} = require('./question/HT1')
const {
  startStack
} = require('./test/stack3')

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
  startStack()
  console.log('QQQ')

  // console.log('result', result)
  // console.log('result', result)

  // console.log('sll', sll.head)

  // console.log('plusArr', plusArr([8, 6, 1], [1, 9, 9]))
  // console.log('unorderArray', unorderArray)
  // insertion(unorderArray)
  // console.log('insertion', unorderArray)

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
  // console.log('uniqueBy members', uniqueBy(members, 'id'))
})
