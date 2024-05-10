const checkValidString = (s) => {
  const arr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      arr.push('(')
    } else if (s[i] === ')' && arr.length === 0) {
      return false
    } else if (s[i] === ')') {
      arr.pop()
    }
  }
  return arr.length === 0
}

const checkValidString2 = (s) => {
  const arr = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        arr.push('(')
        break
      case ')':
        // for: stack 空 & 第一次遇見 ) => invalid
        if (arr.length === 0) {
          return false
        } else {
          arr.pop()
        }
        break
      default:
        break
    }
  }
  return arr.length === 0
}

function checkValidStringRecursive(s) {
  const arr = []

  // recursive 須確實走過該 string 一遍 > 得到 stack
  function helper(input) {
    if (input.length === 0) return
    switch (input[0]) {
      case '(':
        arr.push('(')
        break
      case ')':
        if (arr.length === 0 || arr[arr.length - 1] === ')') {
          arr.push(')')
        } else {
          arr.pop()
        }
        break
      default:
        break
    }
    helper(input.substring(1))
  }
  helper(s)

  return arr.length === 0
}

module.exports = {
  checkValidString,
  checkValidString2,
  checkValidStringRecursive
}
