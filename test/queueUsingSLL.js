// https://www.geeksforgeeks.org/javascript-program-for-implementation-of-queue-using-linked-list/
// Queue
function Node (val, next) {
  this.val = val
  this.next = next
}

// push
class Queue {
  constructor () {
    this.first = null
    this.last = null
  }

  enqueue (val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
  }

  dequeue () {
    if (!this.first) return null
    const temp = this.first
    this.first = this.first.next
    if (!this.first) this.last = null
    return temp.val
  }

  peek () {
    if (!this.first) {
      console.log('\nQueue  is empty')
      return Number.MIN_VALUE
    } else {
      return this.first.val
    }
  }

  isEmpty () {
    return !this.first
  }
}

function startQueue () {
  const queue = new Queue()
  queue.enqueue(10)
  console.log(queue)
  queue.enqueue(20)
  queue.enqueue(30)
  console.log(queue.dequeue())
  console.log(queue.peek())
  console.log(queue.isEmpty())
  console.log(queue.dequeue())
  console.log(queue.dequeue())
  console.log(queue)
  console.log(queue.isEmpty())
}

module.exports = { startQueue }
