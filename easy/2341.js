/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let pairs = 0;
  let leftover = nums.length;
  let sorted = nums.sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      leftover -= 2;
      i++;
    }
  }

  return [pairs, leftover];
};

console.log(numberOfPairs([0]));
