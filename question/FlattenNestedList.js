// function ListNode (val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }
const ListNode = function (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const node1 = new ListNode(1, new ListNode(2))
const node2 = new ListNode(3)
const node3 = new ListNode(4, new ListNode(5))
node1.next.next = node2
node2.next = node3

// function isInt (num) {
//   return typeof num === 'number'
// }

// function flattenV1 (head) {
//   while (head) {
//     if (isInt(head.val)) head = head.next
//     else {
//       let cur = head.val
//       const dh = new Node(0)
//       let dhCur = dh
//       while (cur) {
//         if (isInt(cur.val)) {
//           dhCur.next = new Node(cur.val)
//           dhCur = dhCur.next
//           cur = cur.next
//         }
//       }
//       dhCur.next = head.next
//       cur = dh.next
//     }
//   }
// }
// flattenV1(node1)
module.exports = { node1, node2, node3 }
