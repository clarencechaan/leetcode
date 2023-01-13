/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;

  for (const num of n
    .toString()
    .split("")
    .map((char) => parseInt(char))) {
    product *= num;
    sum += num;
  }

  return product - sum;
};

console.log(subtractProductAndSum(4421));
