/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = candies.reduce((max, num) => Math.max(max, num), 0);
  return candies.map((num) => num + extraCandies >= max);
};

console.log(kidsWithCandies([12, 1, 12], 10));
