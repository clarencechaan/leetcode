/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  nums.sort((a, b) => (a > b ? -1 : 1));

  function getBucketIdx(num) {
    const size = Math.ceil(nums[0] / 10);
    return 10 - Math.floor(num / size);
  }

  let buckets = [];
  for (let i = 0; i <= 10; i++) buckets.push([]);
  for (const num of nums) buckets[getBucketIdx(num)].push(num);

  let result = 0;
  for (let bucketIdx = 0; bucketIdx < buckets.length; bucketIdx++) {
    buckets[bucketIdx].sort((a, b) => (a > b ? -1 : 1));
    if (buckets[bucketIdx].length <= k) {
      for (let num of buckets[bucketIdx]) {
        k--;
        result += num;
        num = Math.ceil(num / 3);
        buckets[getBucketIdx(num)].push(num);
        if (k <= 0) break;
      }
    } else {
      for (let i = 0; i < k; i++) result += buckets[bucketIdx][i];
      break;
    }
  }

  return result;
};

console.log(maxKelements([10, 10, 10, 10, 10], 5));
