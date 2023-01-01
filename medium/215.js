/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let arr = [];

  for (const num of nums)
    arr[num + 10000] = arr[num + 10000] ? arr[num + 10000] + 1 : 1;

  arr = arr.map((count, idx) => ({
    val: idx - 10000,
    count,
  }));

  arr = arr.filter((obj) => obj);

  for (let i = arr.length - 1; i >= 0; i--) {
    k -= arr[i].count;
    if (k < 1) return arr[i].val;
  }
};
