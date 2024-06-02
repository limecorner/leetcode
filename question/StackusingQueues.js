// 225. Implement Stack using MyQueue
// Node
function Node (val, next) {
  this.val = val
  this.next = next
}

// MyQueue
// ush to back, peek/pop from front, size and is empty
class MyQueue {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue (val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  dequeue () {
    if (!this.head) {
      return null
    }
    const removedNode = this.head
    if (!this.head.next) {
      this.tail = null
    }
    this.head = this.head.next
    this.size--
    return removedNode.val
  }

  peek () {
    if (!this.head) {
      return null
    }
    return this.head.val
  }

  empty () {
    return this.size === 0
  }
}

// const q = new MyQueue()
// q.push(1)
// q.push(2)
// q.pop()
// q.size
// q.empty()

class MyStack {
  constructor () {
    this.q = new MyQueue()
  }

  push (x) {
    this.q.enqueue(x)
    let rotateTimes = this.q.size - 1
    while (rotateTimes > 0) {
      // const newHead = this.q.head.next
      // this.q.tail.next = this.q.head
      // this.q.head.next = null
      // this.q.head = newHead
      this.q.enqueue(this.q.dequeue())
      rotateTimes--
    }
  }

  pop () {
    if (!this.q.head) return null
    return this.q.dequeue()
  }

  top () {
    if (!this.q.head) return null
    return this.q.peek()
  }

  empty () {
    if (!this.q.head) return true
    return false
  }
}

const s = new MyStack()
s.push(1)
s.push(2)
// s.pop() // return 2
// s.pop() // return 2

module.exports = {
  s
}
