/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let oddsCountFreqMap = [1];
  let count = 0;
  for (const num of nums) {
    if (num % 2 === 1) count++;
    oddsCountFreqMap[count] = (oddsCountFreqMap[count] || 0) + 1;
  }

  let result = 0;
  for (let i = 0; i + k < oddsCountFreqMap.length; i++)
    result += oddsCountFreqMap[i] * oddsCountFreqMap[i + k];

  return result;
};

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
