/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
  nums.sort();
  let freqMap = {};
  for (const num of nums) freqMap[num] = (freqMap[num] || 0) + 1;

  let numsLeft = nums.length;
  loop: while (numsLeft > 0)
    for (let num in freqMap) {
      num = parseInt(num);
      for (let i = 0; i < k; i++) {
        if (!freqMap[num + i]) return false;
        else {
          freqMap[num + i]--;
          if (!freqMap[num + i]) delete freqMap[num + i];
          numsLeft--;
        }
      }
      continue loop;
    }

  return true;
};

console.log(isPossibleDivide([1, 2, 3, 3, 4, 4, 5, 6], 4));
