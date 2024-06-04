/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function (nums) {
  nums = [...new Set(nums)];

  const n = nums.length;

  // multiply every odd element by 2
  for (let i = 0; i < n; i++) if (nums[i] % 2 === 1) nums[i] *= 2;

  nums.sort((a, b) => (a > b ? 1 : -1));

  function binarySearch(num) {
    let min = 0;
    let max = nums.length;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (nums[mid] >= num) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }
    return mid;
  }

  function divideHighest() {
    const highest = nums.pop();
    const divided = highest / 2;
    const idx = binarySearch(divided);
    nums.splice(idx, 0, divided);
    return nums[n - 1] - nums[0];
  }

  let result = Infinity;
  while (nums[n - 1] % 2 === 0) result = Math.min(result, divideHighest());
  return result;
};

console.log(minimumDeviation([1, 2, 3, 4]));
