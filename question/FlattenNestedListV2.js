/**
 * @constructor
 * @param {NestedInteger[]} nestedList // array
 */
const NestedIterator = function (nestedList) {
  this.stack = []
  this.dfs(nestedList)
  this.stack.reverse()
}

/**
* @this NestedIterator
* @returns {boolean}
*/
NestedIterator.prototype.hasNext = function () {
  return this.stack.length
}

/**
* @this NestedIterator
* @returns {integer}
*/
NestedIterator.prototype.next = function () {
  return this.stack.pop()
}

NestedIterator.prototype.dfs = function (nested) {
  for (const n of nested) {
    console.log('n', n)
    if (n.isInteger()) {
      this.stack.push(n.getInteger())
    } else {
      this.dfs(n.getList())
    }
  }
}
