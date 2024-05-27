/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function (nums) {
  const n = nums.length / 2;
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  // goal: choose `n` elements to get a sum as close to `totalSum / 2`
  const target = totalSum / 2;

  const half1 = nums.slice(0, n);
  const half2 = nums.slice(n);

  const sumValues1 = Array(n + 1)
    .fill()
    .map(() => new Set());
  const sumValues2 = Array(n + 1)
    .fill()
    .map(() => new Set());

  function getSums(half, idx = 0, length = 0, sum = 0) {
    if (length > n || idx > n) return;

    if (half === 1) {
      sumValues1[length].add(sum);
      getSums(half, idx + 1, length + 1, sum + half1[idx]);
    } else if (half === 2) {
      sumValues2[length].add(sum);
      getSums(half, idx + 1, length + 1, sum + half2[idx]);
    }

    getSums(half, idx + 1, length, sum);
  }

  getSums(1);
  getSums(2);

  for (let k = 0; k <= n; k++) {
    sumValues1[k] = [...sumValues1[k]].sort((a, b) => (a > b ? 1 : -1));
    sumValues2[k] = [...sumValues2[k]].sort((a, b) => (a > b ? 1 : -1));
  }

  function binarySearchClosest(sorted, num) {
    let min = 0;
    let max = sorted.length - 1;
    let mid = Math.floor((min + max) / 2);

    while (max - min > 1) {
      if (num < sorted[mid]) max = mid;
      else if (num >= sorted[mid]) min = mid;
      mid = Math.floor((min + max) / 2);
    }

    const diff1 = Math.abs(num - sorted[min]);
    const diff2 = Math.abs(num - sorted[max]);

    if (diff1 < diff2) return sorted[min];
    return sorted[max];
  }

  let closest = Infinity;
  for (let k = 0; k <= n; k++)
    for (const sum1 of sumValues1[k]) {
      const targetSum2 = target - sum1;
      const sum2 = binarySearchClosest(sumValues2[n - k], targetSum2);
      if (Math.abs(sum1 + sum2 - target) < Math.abs(closest - target))
        closest = sum1 + sum2;
    }

  return Math.abs(totalSum - 2 * closest);
};

console.log(minimumDifference([3, 9, 7, 3]));
