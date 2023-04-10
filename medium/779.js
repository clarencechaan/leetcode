/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  let result = false;

  while (k > 1) {
    while (Math.pow(2, n) >= k) n--;
    k -= Math.pow(2, n);
    result = !result;
  }

  return result ? 1 : 0;
};

console.log(kthGrammar(5, 14));

// 0
// 01
// 0110
// 01101001
// 0110100110010110

// row[i] === !row[i - row.length / 2]

// 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16
// 0  1  1  0  1  0  0  1  1  0  0  1  0  1  1  0
