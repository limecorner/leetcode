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

const formedSLL = formSLL(1, 2)
module.exports = { formedSLL }
