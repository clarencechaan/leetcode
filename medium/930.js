/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j]) count++;
      if (count === goal) result++;
      else if (count > goal) break;
    }
  }

  return result;
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
