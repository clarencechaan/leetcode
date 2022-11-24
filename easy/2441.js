/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let sorted = nums.sort((a, b) => (a > b ? -1 : 1));
  let largest = -1;
  for (const num of sorted) {
    if (sorted.includes(-num)) {
      largest = num;
      break;
    }
  }
  return largest;
};

console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
