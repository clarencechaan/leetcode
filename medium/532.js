/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let freqMap = {};
  for (const num of nums) freqMap[num] = (freqMap[num] || 0) + 1;

  let result = 0;
  for (let num in freqMap) {
    num = parseInt(num);
    if ((k === 0 && freqMap[num] >= 2) || (k >= 1 && freqMap[num + k]))
      result++;
  }

  return result;
};

console.log(findPairs([3, 1, 4, 1, 5], 2));
