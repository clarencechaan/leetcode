/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let increasingIntervals = [];

  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1] || i === nums.length - 1) {
      if (i > start) increasingIntervals.push([start, i]);
      start = i + 1;
    }
  }

  for (let i = 0; i < increasingIntervals.length; i++) {
    const min = nums[increasingIntervals[i][0]];
    const max = nums[increasingIntervals[i][1]];
    const start = increasingIntervals[i][1] + 1;
    const end = nums.length;
    for (let j = start; j < end; j++)
      if (nums[j] > min && nums[j] < max) return true;
  }

  return false;
};

console.log(find132pattern([10, 12, 6, 8, 3, 11]));
