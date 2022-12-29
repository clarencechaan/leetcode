/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let prod = BigInt(1);
  for (let i = 2; i <= n; i++) prod *= BigInt(i);

  let arr = prod.toString().split("");
  let count = 0;
  while (arr[arr.length - 1] === "0") {
    arr.pop();
    count++;
  }
  return count;
};

console.log(trailingZeroes(3));
