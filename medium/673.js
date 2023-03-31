/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let subsequenceLengthFreq = [];
  subsequenceLengthFreq[nums.length - 1] = { length: 1, freq: 1 };

  for (let i = nums.length - 2; i >= 0; i--) {
    let max = 0;
    let freq = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        if (max === 0 || subsequenceLengthFreq[j].length > max) {
          max = subsequenceLengthFreq[j].length;
          idx = j;
          freq = subsequenceLengthFreq[j].freq;
        } else if (subsequenceLengthFreq[j].length === max) {
          freq += subsequenceLengthFreq[j].freq;
        }
      }
    }
    subsequenceLengthFreq[i] = {
      length: 1 + max,
      freq,
    };
  }

  let max = 0;
  for (const { length } of subsequenceLengthFreq) max = Math.max(max, length);

  let result = 0;
  for (const { length, freq } of subsequenceLengthFreq)
    if (length === max) result += freq;

  return result;
};

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
