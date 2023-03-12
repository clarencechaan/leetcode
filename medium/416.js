/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let half = nums.reduce((val, sum) => val + sum, 0) / 2;
  let prev = [true];
  let curr = [true];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < prev.length && j + nums[i] <= half; j++)
      if (prev[j]) curr[j + nums[i]] = true;
    prev = [...curr];
  }

  return !!curr[half];
};

console.log(canPartition([2, 3, 6, 9, 14]));

//    0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
// 0  T F F F F F F F F F F  F  F  F  F  F  F  F
// 2  T F T F F F F F F F F  F  F  F  F  F  F  F
// 3  T F T T F T F F F F F  F  F  F  F  F  F  F
// 6  T F T T F T T F T T F  T  F  F  F  F  F  F
// 9  T F T T F T T F T T F  T  T  F  T  T  F  T
// 14 T F T T F T T F T T F  T  T  F  T  T  T  T
