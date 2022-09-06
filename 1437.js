/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 1) find minimum space between two 1s
//  a) iterate through array after first 1, if num !== 1, increment distance by 1
//  b) if num === 1, set min = distance, set distance to 0
// 2) return min >= k
var kLengthApart = function (nums, k) {
  let distance = 0;
  let min = Infinity;

  let startIdx = nums.findIndex((num) => num === 1) + 1;

  for (let i = startIdx; i <= nums.length; i++) {
    if (nums[i] !== 1) distance++;
    else {
      min = distance;
      distance = 0;
    }
  }

  return min >= k;
};

console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
