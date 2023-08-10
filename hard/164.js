/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  let min = nums[0];
  let max = nums[0];
  for (const num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  let size = Math.floor((max - min) / (nums.length - 1)) || 1;
  let buckets = [];
  for (const num of nums) {
    let idx = Math.floor(num / size);
    if (!buckets[idx]) buckets[idx] = [num, num];
    else
      buckets[idx] = [
        Math.min(num, buckets[idx][0]),
        Math.max(num, buckets[idx][1]),
      ];
  }

  buckets = buckets.filter((b) => b);

  let result = 0;
  for (let i = 1; i < buckets.length; i++)
    result = Math.max(result, buckets[i][0] - buckets[i - 1][1] || 0);
  return result;
};

console.log(maximumGap([3, 6, 9, 1]));
