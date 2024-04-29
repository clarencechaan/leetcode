/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  const numsSet = new Set();
  for (const arr of nums) for (const num of arr) numsSet.add(num);
  let ans = [Math.min(...numsSet), Math.max(...numsSet)];

  function isRangeValid(a, b) {
    for (let i = 0; i < nums.length; i++)
      if (!nums[i].some((num) => a <= num && num <= b)) return false;
    return true;
  }

  function getUpperBound(lowerBound) {
    let min = lowerBound;
    let max = lowerBound + ans[1] - ans[0];
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (isRangeValid(lowerBound, mid)) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }
    return mid;
  }

  function isRangeBetter(a, b, c, d) {
    return b - a < d - c || (a < c && b - a === d - c);
  }

  for (const lowerBound of numsSet) {
    const upperBound = getUpperBound(lowerBound);
    if (!isRangeValid(lowerBound, upperBound)) continue;
    if (isRangeBetter(lowerBound, upperBound, ...ans))
      ans = [lowerBound, upperBound];
  }

  return ans;
};

console.log(
  smallestRange([
    [4, 10, 15, 24, 26],
    [0, 9, 12, 20],
    [5, 18, 22, 30],
  ])
);
