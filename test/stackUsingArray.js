
// push
class Stack {
  constructor () {
    this.arr = []
  }

  push (val) {
    this.arr.push(val)
  }

  pop () {
    return this.arr.pop()
  }

  peek () {
    return this.arr[this.arr.length - 1]
  }

  isEmpty () {
    return this.arr.length === 0
  }
}

function startStack2 () {
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

module.exports = { startStack2 }
