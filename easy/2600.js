/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let sum = 0;
  if (k) {
    sum += Math.min(k, numOnes);
    k -= Math.min(k, numOnes);
  }
  if (k) k -= Math.min(k, numZeros);
  if (k) sum -= Math.min(k, numNegOnes);

  return sum;
};

console.log(kItemsWithMaximumSum(3, 2, 0, 2));
