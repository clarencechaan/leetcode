/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function (nums, k) {
  let runningSum = [0];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    runningSum.push(sum);
  }

  let map = {};
  function recurse(k, idx = 0) {
    if (map[k + "," + idx] !== undefined) return map[k + "," + idx];
    if (k === 1)
      return (
        (runningSum[runningSum.length - 1] - runningSum[idx]) /
        (runningSum.length - 1 - idx)
      );

    let max = 0;
    for (let i = idx + 1; i + 1 + (k - 2) < runningSum.length; i++)
      max = Math.max(
        max,
        (runningSum[i] - runningSum[idx]) / (i - idx) + recurse(k - 1, i)
      );

    map[k + "," + idx] = max;
    return max;
  }

  return recurse(k);
};

console.log(largestSumOfAverages([1, 2, 3, 4, 5, 6, 7], 4));
