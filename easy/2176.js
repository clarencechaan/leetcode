/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let result = 0;

  for (let i = 0; i < nums.length - 1; i++)
    for (let j = i + 1; j < nums.length; j++)
      if ((i * j) % k === 0 && nums[i] === nums[j]) result++;

  return result;
};

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
