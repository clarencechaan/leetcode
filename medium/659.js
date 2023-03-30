/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  let freqMap = {};
  for (const num of nums) freqMap[num] = (freqMap[num] || 0) + 1;

  let remaining = nums.length;
  while (remaining) {
    let prev;
    let count = 0;
    for (const num in freqMap) {
      if (prev !== undefined && parseInt(num) !== prev + 1) break;
      if (freqMap[num]) {
        if (freqMap[num] - 1 < freqMap[prev]) break;
        freqMap[num]--;
        count++;
        prev = parseInt(num);
      }
    }
    if (count < 3) return false;
    remaining -= count;
  }

  return true;
};

console.log(isPossible([1, 2, 3, 4, 4, 5]));
