/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let smallest = nums[0];
  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    smallest = Math.min(smallest, nums[i]);
    largest = Math.max(largest, nums[i]);
  }

  for (let i = largest; i >= 1; i--)
    if (largest % i === 0 && smallest % i === 0) return i;
};

console.log(findGCD([3, 3]));
