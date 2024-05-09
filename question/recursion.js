function countDown (num) {
  if (num <= 0) {
    console.log('all done')
    return
  }
  console.log(num)
  num--
  countDown(num)
}

function sum (num) {
  if (num === 1) return 1
  return num + sum(num - 1)
}

function fac (num) {
  if (num === 1 || num === 0) return 1
  return num * fac(num - 1)
}

function collectOddValues (arr) {
  const result = []

  function helper (inputArray) {
    if (inputArray.length === 0) return
    if (inputArray[0] % 2 !== 0) {
      result.push(inputArray[0])
    }
    helper(inputArray.slice(1))
  }
  helper(arr)

  return result
}

function power (base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}

function productOfArray (arr) {
  if (arr.length === 0) return 1
  return arr[0] * productOfArray(arr.slice(1))
}

function fib (n) {
  if (n === 2 || n === 1) return 1
  return fib(n - 1) + fib(n - 2)
}

module.exports = { countDown, sum, fac, collectOddValues, power, productOfArray, fib }
