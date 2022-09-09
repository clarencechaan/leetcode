/**
 * @param {number[]} nums
 * @return {number}
 */
// 1) calculate n
// 2) count number of occurences for each element
// 3) return the number if occurences is incremented to equal n
var repeatedNTimes = function (nums) {
  let counts = {};
  const n = nums.length / 2;

  for (const num of nums) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    if (counts[num] === n) return num;
  }
};

console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
