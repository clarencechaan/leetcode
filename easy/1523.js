/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  return Math.floor((high - low) / 2) + (low % 2 || high % 2);
};

console.log(countOdds(2, 6));
console.log(countOdds(3, 7));
console.log(countOdds(2, 7));
console.log(countOdds(3, 8));
console.log(countOdds(14, 17));

// 2 3 4 5 6 --- 2
// 3 4 5 6 7 --- 3
// 2 3 4 5 6 7 --- 3
// 3 4 5 6 7 8 --- 3

// 14 15 16 17 --- 2
