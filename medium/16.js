/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let closest = null;

  for (let i = 0; i < nums.length - 2; i++)
    for (let j = i + 1; j < nums.length - 1; j++)
      for (let k = j + 1; k < nums.length; k++)
        if (
          closest === null ||
          Math.abs(nums[i] + nums[j] + nums[k] - target) <
            Math.abs(closest - target)
        )
          closest = nums[i] + nums[j] + nums[k];

  return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
