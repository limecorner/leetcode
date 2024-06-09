function Node (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// recursive
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
function find (root, val) {
  if (!root) return null
  if (root.val === val) { return root }
  if (root.val > val) {
    return find(root.left, val)
  } else {
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

function DFSPreOrder (root) {
  const visited = []
  function traverse (node) {
    visited.push(node.val)
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }
  traverse(root)
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

const result = DFSInOrder(node)

module.exports = {
  node, result
}
