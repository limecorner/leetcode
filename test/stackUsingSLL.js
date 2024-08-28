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
  const st = new Stack()

  // Push elements onto the stack
  st.push(11)
  st.push(22)
  st.push(33)
  st.push(44)

  // Print top element of the stack
  console.log('Top element is ' + st.peek())

  // removing two elemements from the top
  console.log('Removing two elements...')
  st.pop()
  st.pop()

  // Print top element of the stack
  console.log('Top element is ' + st.peek())
}

module.exports = { startStack }
