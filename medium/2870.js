/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const freq = {};
  for (const num of nums) freq[num] = (freq[num] || 0) + 1;

  function getNumOperations(count) {
    if (count === 1) return Infinity;
    if (count % 3 === 0) return count / 3;
    if (count % 3 === 1) return 1 + getNumOperations(count - 2);
    if (count % 3 === 2) return 1 + (count - 2) / 3;
  }

  let ans = 0;
  for (const num in freq) {
    ans += getNumOperations(freq[num]);
    if (ans === Infinity) return -1;
  }

  return ans;
};

console.log(minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4]));
