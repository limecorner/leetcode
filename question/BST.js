function Node (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// while
// t: O(h),
// best/avg(balanced): O(log n),
// worst(unbalanced => LL): O(n)
// s: O(1)
// function insert (root, val) {
//   const temp = new Node(val)
//   if (!root) return temp
//   let cur = root
//   let par = null
//   while (cur) {
//     par = cur
//     if (val > cur.val) {
//       cur = cur.right
//     } else {
//       cur = cur.left
//     }
//   }
//   if (val > par.val) {
//     par.right = temp
//   } else {
//     par.left = temp
//   }
//   return root
// }

// function insert (root, val) {
//   const newNode = new Node(val)
//   if (!root) return newNode
//   let cur = root
//   while (cur) {
//     if (val > cur.val) {
//       if (!cur.right) {
//         cur.right = newNode
//         return root
//       }
//       cur = cur.right
//     } else {
//       if (!cur.left) {
//         cur.left = newNode
//         return root
//       }
//       cur = cur.left
//     }
//   }
// }

// recursive
// t: O(h),
// best/avg(balanced): O(log n),
// worst(unbalanced => LL): O(n)
// s: O(h)
function insert (root, val) {
  if (!root) {
    // 沒有 this
    // this.root = new Node(val)
    return new Node(val)
  }
  if (val < root.val) {
    root.left = insert(root.left, val)
  } else if (root.val < val) {
    root.right = insert(root.right, val)
  }
  // must have!!!
  return root
}

// iterative v2
// function find (root, val) {
//   while (root) {
//     if (root.val === val) return root
//     else if (root.val > val) {
//       root = root.left
//     } else if (root.val < val) {
//       root = root.right
//     }
//   }
//   return null
// }

// recursive
// function find (root, val) {
//   if (!root) return null
//   if (root.val === val) { return root }
//   if (root.val > val) {
//     return find(root.left, val)
//   } else {
//     return find(root.right, val)
//   }
// };

function find (root, val) {
  if (!root) return null
  if (root.val === val) { return root }
  if (root.val > val) {
    return find(root.left, val)
  } else if (root.val < val) {
    return find(root.right, val)
  }
};

function bfs (root) {
  const q = [root]
  const visited = []
  // while (q.length) {
  while (q[0]) {
    const node = q.shift()
    visited.push(node)
    if (node.left) q.push(node.left)
    if (node.right) q.push(node.right)
  }
  return visited
}

// function DFSPreOrder (root) {
//   const visited = []
//   function traverse (node) {
//     visited.push(node.val)
//     if (node.left) traverse(node.left)
//     if (node.right) traverse(node.right)
//   }
//   traverse(root)
//   return visited
// }

// recursive
function DFSPreOrder (root) {
  const visited = [root.val]
  const stack = [root.right]
  let cur = root.left

  while (stack.length || cur) {
    if (!cur) {
      cur = stack.pop()
      continue
    }
    visited.push(cur.val)
    stack.push(cur.right)
    cur = cur.left
  }
  return visited
}

function DFSPostOrder (root) {
  const visited = []
  function traverse (node) {
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
    visited.push(node.val)
  }
  traverse(root)
  return visited
}

function DFSInOrder (root) {
  const visited = []
  function traverse (node) {
    if (node.left) traverse(node.left)
    visited.push(node.val)
    if (node.right) traverse(node.right)
  }
  traverse(root)
  return visited
}
// InOrder
// [3, 6, 8, 10, 15, 20]

// DFSPreOrder
// 一跑就放
// [10, 6, 3, 8, 15, 20]

// DFSPostOrder
// 跑完才放
// [3, 8, 6, 20, 15, 10]
const node = insert(null, 10)
insert(node, 6)
insert(node, 15)
insert(node, 3)
insert(node, 8)
insert(node, 20)
const found = find(node, 15)

// const result = DFSPreOrder(node)

module.exports = {
  node, found
}
