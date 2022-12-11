/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => (a > b ? -1 : 1));

  for (let i = 0; i < nums.length - 2; i++)
    for (let j = i + 1; j < nums.length - 1; j++)
      for (let k = j + 1; k < nums.length; k++)
        if (nums[i] < nums[j] + nums[k]) return nums[i] + nums[j] + nums[k];

  return 0;
};

console.log(largestPerimeter([2, 1, 2]));

// a triangle has a zero area if one side is greater than or equal to
// the sum of the other two sides

// => find the combination of 3 numbers with the highest sum, where
// the greatest number is less than the sum of the other two numbers
