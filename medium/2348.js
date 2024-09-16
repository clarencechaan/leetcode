/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  const streaks = [0];

  for (const num of nums)
    if (num === 0) streaks[streaks.length - 1]++;
    else if (streaks[streaks.length - 1] !== 0) streaks.push(0);

  let ans = 0;
  for (const l of streaks) ans += (l * (l + 1)) / 2;

  return ans;
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));

// length => num subarrays
// 1 => 1
// 2 => 3
// 3 => 6
// 4 => 10
// 5 => 15
// => length * (length + 1) / 2
