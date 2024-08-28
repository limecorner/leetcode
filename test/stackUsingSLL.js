// Stack
function Node (val, next) {
  this.val = val
  this.next = next
}

// push
class Stack {
  constructor () {
    this.first = null
  }

  push (val) {
    if (!this.first) {
      this.first = new Node(val)
    } else {
      const node = new Node(val)
      node.next = this.first
      this.first = node
    }
  }

  pop () {
    if (!this.first) {
      return null
    } else {
      const node = this.first
      this.first = this.first.next
      return node.val
    }
  }

  peek () {
    if (!this.first) {
      console.log('\nStack is empty')
      return Number.MIN_VALUE
    } else {
      return this.first.val
    }
  }

  isEmpty () {
    return this.first === null
  }
}

function startStack () {
  const stack = new Stack()
  console.log(stack.isEmpty())

  console.log(stack.peek())
  stack.push(1)
  stack.push(2)
  stack.push(3)
  console.log(stack.peek())
  console.log(stack)
  const top = stack.pop()
  console.log('top', top)
  console.log(stack)
  // top = stack.pop()
  // console.log('top', top)
  // console.log(stack)
}

module.exports = { startStack }
