/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  let runningSum = [0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    runningSum.push(sum);
  }
  if (sum % p === 0) return 0;

  for (let length = 1; length < nums.length; length++)
    for (let i = 0; i + length < runningSum.length; i++)
      if ((sum - (runningSum[i + length] - runningSum[i])) % p === 0)
        return length;

  return -1;
};

console.log(minSubarray([3, 1, 4, 2], 6));
