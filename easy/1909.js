/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let removeIdx = -1;

  for (let i = 0; i < nums.length - 1; i++)
    if (nums[i] >= nums[i + 1]) removeIdx = i;

  function isStrictlyIncreasing(removeIdx) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (i === removeIdx) continue;
      else if (i === removeIdx - 1) {
        if (nums[i] >= nums[i + 2]) return false;
      } else if (nums[i] >= nums[i + 1]) return false;
    }

    return true;
  }

  if (isStrictlyIncreasing(removeIdx)) return true;
  else if (isStrictlyIncreasing(removeIdx + 1)) return true;
  else return false;
};

console.log(canBeIncreasing([105, 924, 32, 968]));

// too big in middle
// 1 2 10 5 7

// too small in middle
// 1 2 0 5 7

// too big at start
// 10 1 2 5 7

// too small at end
// 1 2 5 7 0

// two adjacent equal
// 1 2 2 5 7
