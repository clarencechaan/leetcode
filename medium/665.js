/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  function isNonDecreasing() {
    for (let i = 0; i < nums.length - 1; i++)
      if (nums[i] > nums[i + 1]) return false;
    return true;
  }

  if (isNonDecreasing()) return true;

  let ranges = [];
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (right === nums.length - 1 || nums[right] > nums[right + 1]) {
      if (ranges.length >= 2) return false;
      ranges.push([left, right]);
      left = right + 1;
    }
  }

  return (
    ranges[0][0] === ranges[0][1] ||
    ranges[1][0] === ranges[1][1] ||
    nums[ranges[0][1]] <= nums[ranges[1][0] + 1] ||
    nums[ranges[0][1] - 1] <= nums[ranges[1][0]]
  );
};

console.log(checkPossibility([3, 4, 2, 3]));
