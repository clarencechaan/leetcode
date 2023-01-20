/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  let n = nums.length;
  nums.sort((a, b) => (a > b ? 1 : -1));

  for (let i = n; i > 0; i--) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) if (nums[j] >= i) count++;
    if (count === i) return i;
  }

  return -1;
};

console.log(specialArray([0, 4, 3, 0, 4]));
