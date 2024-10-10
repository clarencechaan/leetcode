/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  let ans = Infinity;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      for (let k = j + 1; k < nums.length; k++)
        if (nums[i] < nums[j] && nums[k] < nums[j])
          ans = Math.min(ans, nums[i] + nums[j] + nums[k]);

  if (ans === Infinity) return -1;
  return ans;
};

console.log(minimumSum([8, 6, 1, 5, 3]));
