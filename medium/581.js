/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let descendingArrs = [];
  let left = 0;

  let min = nums[0];
  let max = nums[0];

  for (let right = 1; right <= nums.length; right++) {
    if (nums[right - 1] <= nums[right] || right === nums.length) {
      if (left < right - 1)
        descendingArrs.push({ range: [left, right - 1], min, max });
      left = right;
      min = nums[right];
      max = nums[right];
    }
    min = Math.min(min, nums[right]);
    max = Math.max(max, nums[right]);
  }

  min = Infinity;
  max = -Infinity;
  for (const desc of descendingArrs) {
    min = Math.min(min, desc.min);
    max = Math.max(max, desc.max);
  }

  if (!descendingArrs.length) return 0;

  let start = descendingArrs[0].range[0];
  let end = descendingArrs[descendingArrs.length - 1].range[1];

  while (nums[start] > min) start--;
  while (nums[end] < max) end++;

  return end - start - 1;
};

console.log(findUnsortedSubarray([1, 2, 3, 3, 3]));
