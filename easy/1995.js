/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  let result = 0;

  for (let a = 0; a < nums.length; a++)
    for (let b = a + 1; b < nums.length; b++)
      for (let c = b + 1; c < nums.length; c++)
        for (let d = c + 1; d < nums.length; d++)
          if (nums[a] + nums[b] + nums[c] === nums[d]) result++;

  return result;
};

console.log(countQuadruplets([1, 1, 1, 3, 5]));
