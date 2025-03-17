/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => (a > b ? 1 : -1));
  const corners = [];
  for (let i = 1; i < nums.length; i++)
    if (nums[i - 1] < nums[i]) corners.push(i);
  corners.push(nums.length);

  let max = corners[0];
  let left = 0;
  let operations = 0;
  for (let i = 1; i < corners.length; i++) {
    const cornerPrevX = corners[i - 1];
    const cornerPrevY = nums[cornerPrevX - 1];
    const cornerX = corners[i];
    const cornerY = nums[cornerX - 1];
    const diff = cornerY - cornerPrevY;
    operations += (cornerPrevX - left) * diff;
    while (operations > k) {
      operations -= cornerY - nums[left];
      left++;
    }
    max = Math.max(max, cornerX - left);
  }
  return max;
};
