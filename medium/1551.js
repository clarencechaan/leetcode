/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let result = 0;
  for (let i = (n % 2) + 1; i < n; i += 2) result += i;
  return result;
};

console.log(minOperations(3));
