/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let seenJ = new Set();
  let seenJval = new Set();
  let seenIval = new Set();

  for (let i = 0; i < nums.length - 2; i++)
    if (!seenIval.has(nums[i]) && seenIval.add(nums[i]))
      for (let j = i + 1; j < nums.length - 1; j++)
        if (
          nums[i] < nums[j] &&
          !seenJ.has(j) &&
          !seenJval.has(nums[j]) &&
          seenJ.add(j) &&
          seenJval.add(nums[j])
        )
          for (let k = j + 1; k < nums.length; k++)
            if (nums[j] < nums[k]) return true;

  return false;
};

console.log(
  increasingTriplet([
    1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
    2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
  ])
);
