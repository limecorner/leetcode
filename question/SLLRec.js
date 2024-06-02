// https://www.youtube.com/watch?v=8GtdXAqaQHg
// node together
function Node (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
class SLL {
  constructor () {
    this.head = null
  }

  append (val) {
    if (!this.head) {
      this.head = new Node(val)
      return
    }
    this._append(val, this.head)
  }

  _append (val, cur) {
    if (!cur.next) {
      cur.next = new Node(val)
      return
    }
    this._append(val, cur.next)
  }

  // my version
  // print () {
  //   this._print(this.head)
  // }

  // _print (cur) {
  //   if (!cur) return
  //   console.log(cur.val)
  //   this._print(cur.next)
  // }

  // film version
  print () {
    const output = this._print(this.head)
    console.log(output)
  }

  _print (cur) {
    if (!cur) return ''
    return cur.val + this._print(cur.next)
  }

  // tail recursive
  // _print (cur, accu = '') {
  //   if (!cur) return accu
  //   return this._print(cur.next, accu + cur.val)
  // }

  contains (target) {
    return this._contains(target, this.head)
  }

  _contains (target, cur) {
    if (!cur) return false
    if (target === cur.val) return true
    return this._contains(target, cur.next)
  }
}

const sll = new SLL()
sll.append(1)
sll.append(2)
sll.append(3)

module.exports = {
  sll
}
