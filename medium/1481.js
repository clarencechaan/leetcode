/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  let freq = {};
  for (const num of arr) freq[num] = (freq[num] || 0) + 1;
  freq = Object.entries(freq).map(([, count]) => count);
  freq.sort((a, b) => (a > b ? -1 : 1));

  for (let i = freq.length - 1; i >= -1; i--) {
    if (freq[i] <= k) k -= freq[i];
    else return i + 1;
  }
};

console.log(findLeastNumOfUniqueInts([5, 5, 4], 1));
