/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let map = {};
  for (const num of nums) map[num] = (map[num] || 0) + 1;

  let result = 0;
  for (let num in map) {
    num = parseInt(num);
    let diff = k - num;
    result +=
      diff === num
        ? Math.floor(map[num] / 2)
        : Math.min(map[num] || 0, map[diff] || 0);
    delete map[num];
    delete map[diff];
  }

  return result;
};

console.log(maxOperations((nums = [3, 1, 3, 4, 3]), (k = 6)));
