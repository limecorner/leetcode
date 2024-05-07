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

const printSLL = sll => {
  let curr = sll.head
  const arr = []
  while (curr) {
    arr.push(curr.val)
    curr = curr.next
  }
  return arr
}

module.exports = { simpleSLL, formSLL, printSLL }
