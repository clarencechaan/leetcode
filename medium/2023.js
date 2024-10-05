/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums, target) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = 0; j < nums.length; j++)
      if (i === j) continue;
      else if (nums[i] + nums[j] === target) ans++;
  return ans;
};

console.log(numOfPairs(["777", "7", "77", "77"], "7777"));
