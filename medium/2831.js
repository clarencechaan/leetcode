/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function (nums, k) {
  function longestSubArray(freqMap, length) {
    if (length - freqMap[mostFreqElem] <= k) return freqMap[mostFreqElem];
    else return 0;
  }

  function getMostFreqElem(freqMap) {
    let m;
    for (let num in freqMap)
      if (m === undefined || freqMap[num] > freqMap[m]) m = num;
    return m;
  }

  let max = 0;
  let left = 0;
  let freqMap = {};
  let mostFreqElem = nums[0];
  for (let right = 0; right <= nums.length; right++) {
    let length = longestSubArray(freqMap, right - left);
    if (length >= max) {
      max = length;
    } else {
      freqMap[nums[left]]--;
      if (!freqMap[nums[left]]) delete freqMap[nums[left]];
      if (nums[left] === mostFreqElem) mostFreqElem = getMostFreqElem(freqMap);
      left++;
    }
    freqMap[nums[right]] = (freqMap[nums[right]] || 0) + 1;
    if (freqMap[nums[right]] > (freqMap[mostFreqElem] || 0))
      mostFreqElem = nums[right];
  }

  return max;
};

console.log(longestEqualSubarray([1, 3, 2, 3, 1, 3], 3));
