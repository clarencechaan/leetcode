/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  let dp = [];

  function recurse(idx = 0) {
    if (idx === books.length) return 0;
    if (dp[idx] !== undefined) return dp[idx];

    let widthSum = 0;
    let maxBookHeight = 0;
    let min = Infinity;

    for (
      let i = idx;
      i < books.length && widthSum + books[i][0] <= shelfWidth;
      i++
    ) {
      widthSum += books[i][0];
      maxBookHeight = Math.max(maxBookHeight, books[i][1]);
      min = Math.min(min, maxBookHeight + recurse(i + 1));
    }

    dp[idx] = min;
    return min;
  }

  return recurse();
};

console.log(
  minHeightShelves(
    [
      [1, 1],
      [2, 3],
      [2, 3],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 2],
    ],
    4
  )
);
