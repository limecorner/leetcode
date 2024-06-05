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

const node = insert(null, 10)
insert(node, 6)
insert(node, 15)
insert(node, 3)
insert(node, 8)
insert(node, 20)

const result = bfs(node)

module.exports = {
  node, result
}
