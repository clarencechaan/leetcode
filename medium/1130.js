/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  let memo = {};

  function recurse(left = 0, right = arr.length) {
    if (right - left < 2) return 0;
    if (right - left === 2) return arr[left] * arr[right - 1];
    if (memo[left + "," + right] !== undefined) return memo[left + "," + right];

    let maxLR = [];
    let maxRL = [];

    for (let i = left; i < right; i++) {
      maxLR[i - left] = Math.max(arr[i], maxLR[i - left - 1] || 0);
      maxRL[right - 1 - i] = Math.max(
        arr[right - 1 - (i - left)],
        maxRL[right - i] || 0
      );
    }

    let min = Infinity;
    for (let i = left + 1; i < right; i++) {
      min = Math.min(
        min,
        maxLR[i - left - 1] * maxRL[i - left] +
          recurse(left, i) +
          recurse(i, right)
      );
    }

    memo[left + "," + right] = min;
    return min;
  }

  return recurse();
};

console.log(mctFromLeafValues([6, 2, 4]));
