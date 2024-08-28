
const majorityElement = function (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      // map.get(nums[i])++
      // let val = map.get(nums[i])
      // val++
      // console.log(val)
      // map.set(nums[i], val)
    } else {
      map.set(nums[i], 1)
    }
    if (map.get(nums[i]) > nums.length / 2) return nums[i]
  }
}

const MajorityElement = majorityElement([3, 2, 3])

module.exports = { MajorityElement }
