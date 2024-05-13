//class

function Node(val, next) {
  this.val = val
  this.next = next
}

// n1    n2    n3
// 3 ->  3 ->  4

// 0 -> 4 -> 6 -> 8
//     prev cur

// 1. p fail -> prev = 1 before cur
// 2. p success -> prev = 1 before cur

// filter(Node) 

// filter internal -> 
//     SLL -- sll.head

// Guard, dummy node

// middle

// filter(n1) => n3

// version 1
function filter(node, p) {
  var cur = node
  var dummy = Node(0, node)
  var prev = dummy

  while(cur) {
      if(p(cur.val)) {
          prev = cur // prev = cur
      } else {
          prev.next = cur.next // move prev 
      }

      cur = cur.next
  }

  return dummy.next
}

// version 2
function filter(node, p) {
  var dummy = Node(0, node)
  var prev = dummy

  // prev hold. prev.next
  while(prev.next) {
      if(!p(prev.next.val)) {
          prev.next = prev.next.next // move prev 
      } else {
          prev = prev.next
      }
  }

  return dummy.next
}

// version 3 (recursion)
function filter(node, p) {
  if(node == null) return null

  const res = filter(node.next) // all the values passed the test "p" in the rest of the linked list

  if(p(node.val)) {
      node.next = res
      return node
  } else {
      return res
  }
}

// recursion section - 1
// arr => arr(odd values)
// [] => []
// 1. Odd -> keep
// 2. Even -> discard

function collectOddValues(arr) {
  if(arr.length == 0) return arr

  const res = collectOddValues(arr.slice(1)) // all the odd values, excluding the first element

  if(arr[0] % 2 == 1) { // odd 
      return [arr[0], ...res]
  } else { // even
      return res
  }
}

function collectOddValues(arr) {
  if(arr.length == 0) return arr

  const res = collectOddValues(arr.slice(1)) // all the odd values, excluding the first element

  if(arr[0] % 2 == 1) { // odd 
      return [arr[0], ...res]
  } else { // even
      return res
  }
}


// 1 -> 2 -> 3 -> 4 -> 5

// n.next =  res
//           n.next =  res
//                     n 

// 1 -> 3 -> 5
function skipOdd(node) {
  if(node == null) return null // 0
  if(node.next) return node // 1

  const res = skipOdd(node.next.next) // >= 2
  node.next = res

  return node
}


console.log(collectOddValues([1,2,3,3]))



