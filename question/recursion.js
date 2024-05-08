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
  if (num === 1) return 1
  return num * fac(num - 1)
}

function collectOddValues (arr) {

}

module.exports = { countDown, sum, fac }
