/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  let totalSum = candies.reduce((sum, val) => sum + val, 0);
  let maxSize = Math.floor(totalSum / k);

  function isSizeValid(size) {
    let piles = 0;
    for (const candy of candies) piles += Math.floor(candy / size);
    return piles >= k;
  }

  function binarySearch() {
    let min = 0;
    let max = maxSize;
    let mid = Math.floor((min + max) / 2);
    while (max - min > 1) {
      let valid = isSizeValid(mid);
      if (!valid) max = mid - 1;
      else min = mid;
      mid = Math.floor((min + max) / 2);
    }

    return isSizeValid(mid + 1) ? mid + 1 : mid;
  }

  return binarySearch();
};

console.log(maximumCandies([5, 8, 6], 3));
