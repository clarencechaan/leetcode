/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  function patternAtIndex(idx) {
    for (let j = 1; j < k; j++)
      for (let l = 0; l < m; l++)
        if (arr[idx + l] !== arr[idx + j * m + l]) return false;
    return true;
  }

  for (let i = 0; i + m * k <= arr.length; i++)
    if (patternAtIndex(i)) return true;

  return false;
};

console.log(containsPattern([2, 2], 1, 2));
