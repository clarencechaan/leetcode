/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => (a > b ? 1 : -1));

  // freq[i] === number of elements that are <= i
  let freq = [];
  for (const num of nums) freq[num] = (freq[num] || 0) + 1;
  for (let i = 0; i < freq.length; i++)
    freq[i] = (freq[i - 1] || 0) + (freq[i] || 0);

  let result = 0;
  for (let i = 0; i < nums.length - 1; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] && nums[j])
        result +=
          (freq[nums[i] + nums[j] - 1] !== undefined
            ? freq[nums[i] + nums[j] - 1]
            : freq[freq.length - 1]) -
          (j + 1);

  return result;
};

// two sides form a triangle with another side that is >= each but < sum

console.log(triangleNumber([2, 2, 3, 4]));
