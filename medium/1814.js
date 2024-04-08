/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  const rev = nums.map((num) => +num.toString().split("").reverse().join(""));

  let diffFreq = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = nums[i] - rev[i];
    diffFreq[diff] = (diffFreq[diff] || 0) + 1;
  }

  let result = 0;
  for (const diff in diffFreq) {
    const n = diffFreq[diff];
    result = (result + (n * (n - 1)) / 2) % (10 ** 9 + 7);
  }
  return result;
};

console.log(countNicePairs([42, 11, 1, 97]));

// nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
// nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])

// diff == nums[i] - rev(nums[i])
// count the number of each `diff`

// count of 2 => 1 pair
// count of 3 => 3 pair
// count of 4 => 3 + 2 + 1 => 6 pair
// count of 5 => 4 + 3 + 2 + 1 == 10 => 4*5/2 == n*(n-1)/2
