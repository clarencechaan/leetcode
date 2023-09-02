/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  let result = Array(n).fill(1);
  let sum = n;

  for (let i = n - 1; i >= 0 && sum < k; i--) {
    let add = Math.min(k - sum, 25);
    result[i] += add;
    sum += add;
  }

  result = result.map((val) => String.fromCharCode(val + 96));
  return result.join("");
};

console.log(getSmallestString(3, 27));
