/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  function longest(compare) {
    let streak = 1;
    let max = 1;
    for (let i = 1; i < nums.length; i++) {
      switch (compare) {
        case ">":
          if (nums[i] > nums[i - 1]) streak++;
          else streak = 1;
          break;
        case "<":
          if (nums[i] < nums[i - 1]) streak++;
          else streak = 1;
          break;
      }
      max = Math.max(max, streak);
    }
    return max;
  }

  return Math.max(longest(">"), longest("<"));
};
