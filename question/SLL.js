class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}
class SLL {
  constructor () {
    this.head = null
  }
}
const simpleSLL = { head: { val: 1, next: { val: 2, next: new Node(3) } } }

const formSLL = (start, end) => {
  if (start > end) {
    return null
  } else {
    const sll = new SLL()
    sll.head = new Node(start)
    let curr = sll.head
    while (start < end) {
      start++
      curr.next = new Node(start)
      curr = curr.next
    }
    return sll
  }
}
function isSmallEnough (value) {
  return value < 3
}
function isEven (value) {
  return value % 2 === 0
}
const sllFilter = (sll, callback) => {
  let prev = null
  let curr = sll.head
  while (curr) {
    if (callback(curr.val)) {
      prev = curr
    } else {
      if (curr === sll.head) { // head
        sll.head = sll.head.next
      } else if (!curr.next) { // tail
        prev.next = null
      } else {
        prev.next = curr.next // 中
      }
    }
    curr = curr.next
  }
  return sll
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

function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
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
const node1 = new ListNode(5, undefined)
const node2 = new ListNode(4, node1)
const node3 = new ListNode(3, node2)

const printSLL = sll => {
  let curr = sll.head
  const arr = []
  while (curr) {
    arr.push(curr.val)
    curr = curr.next
  }
  return arr
}

module.exports = { simpleSLL, formSLL, printSLL, sllFilter, isSmallEnough, isEven, sllMap, mutiply, sllForEach, printMutiply, node3, reverseList }
