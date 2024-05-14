
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const node3 = new ListNode(3)
const node2 = new ListNode(2, new ListNode(3))
const node1 = new ListNode(1, node2)

const formSLL = (start, end) => {
  if (start > end) {
    return null
  } else {
    const head = new ListNode(start)
    let curr = head
    while (start < end) {
      start++
      curr.next = new ListNode(start)
      curr = curr.next
    }
    return head
  }
}
function isSmallEnough (value) {
  return value < 3
}
function isEven (value) {
  return value % 2 === 0
}

// null       2     ->           4
//       3       3     4
// pr                         cu
//                    head
//                    pr
// 1
//

const sllFilter = (head, callback) => {
  let prev = null
  let curr = head
  while (curr) {
    if (callback(curr.val)) {
      prev = curr
    } else {
      if (curr === head) { // head
        head = head.next
      } else if (!curr.next) { // tail
        prev.next = null
      } else {
        prev.next = curr.next // 中
      }
    }
    curr = curr.next
  }
  return head
}

function mutiply (x) {
  return x * 2
}
const sllMap = (sll, callback) => {
  let curr = sll.head
  while (curr) {
    curr.val = callback(curr.val)
    curr = curr.next
  }
  return sll
}

function printMutiply (x) {
  console.log(x * 2)
}
const sllForEach = (sll, callback) => {
  let curr = sll.head
  while (curr) {
    callback(curr.val)
    curr = curr.next
  }
}

const reverseList = function (head) {
  if (!head) return head
  // if (!head.next) return head
  let prev = null
  let curr = head
  let nextNode = curr.next
  curr.next = prev
  while (nextNode) {
    prev = curr
    curr = nextNode
    nextNode = curr.next
    curr.next = prev
  }
  return curr
}

//
// 1 ->  2  -> 3
// val
// next

const reverseListRecursive = function (head) {
  if (!head || !head.next) return head
  // if (!head.next) return head
  const newHead = reverseList(head.next)
  const nextNode = head.next
  nextNode.next = head
  head.next = null
  return newHead
}

const printSLL = head => {
  let curr = head
  const arr = []
  while (curr) {
    arr.push(curr.val)
    curr = curr.next
  }
  return arr
}

module.exports = { formSLL, printSLL, sllFilter, isSmallEnough, isEven, sllMap, mutiply, sllForEach, printMutiply, node1, node3, reverseList, reverseListRecursive }
