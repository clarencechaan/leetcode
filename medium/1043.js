/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  let map = {};

  function recurse(start = 0, end = arr.length) {
    if (end - start <= k) {
      let maxElem = 0;
      for (let i = start; i < end; i++) maxElem = Math.max(maxElem, arr[i]);
      return maxElem * (end - start);
    }

    if (map[start + "," + end] !== undefined) return map[start + "," + end];

    let max = 0;
    for (let i = start + 1; i - start <= k && i <= end; i++)
      max = Math.max(max, recurse(start, i) + recurse(i, end));

    map[start + "," + end] = max;
    return max;
  }

  return recurse();
};

console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3));
