// 225. Implement Stack using Queues
// Node
function Node (val, next) {
  this.val = val
  this.next = next
}

// queue
// ush to back, peek/pop from front, size and is empty
class Queue {
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

  isEmpty () {
    return this.size === 0
  }
}

const q1 = new Queue()
// q1.enqueue(1)
// q1.enqueue(2)
// q1.dequeue()
// q1.size
// q1.empty()

// 2 queues
// const MyStack = function () {
//   this.q1 = new Queue()
//   this.q2 = new Queue()
// }

class MyStack {
  constructor () {
    this.q1 = new Queue()
    this.q2 = new Queue()
  }

  push (x) {
    if (!this.q1.head && !this.q2.head) {
      this.q1.enqueue(x)
    } else {
      let pushedQ, containerQ, cur
      if (this.q1.head) {
        containerQ = this.q1
        cur = this.q1.head
        pushedQ = this.q2
      } else {
        containerQ = this.q2
        cur = this.q2.head
        pushedQ = this.q1
      }
      // console.log('cur1', cur)

      pushedQ.enqueue(x)
      while (cur) {
        pushedQ.enqueue(cur.val)
        cur = cur.next
      }
      containerQ.head = null
      containerQ.tail = null
      containerQ.size = 0
      // console.log('cur2', cur)
    }
  }

  pop () {
    if (!this.q1.head && !this.q2.head) return null
    const q = this.q1.head ? this.q1 : this.q2
    return q.dequeue()
  }

  top () {
    if (!this.q1.head && !this.q2.head) return null
    const q = this.q1.head ? this.q1 : this.q2
    return q.peek()
  }

  empty () {
    if (!this.q1.head && !this.q2.head) return true
    return false
  }
}

const s1 = new MyStack()
s1.push(1)
s1.push(2)
// s1.pop() // return 2
// s1.pop() // return 2

module.exports = {
  q1, s1
}
