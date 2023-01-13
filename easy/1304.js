/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let result = [];
  if (n % 2 === 1) result.push(0);
  for (let i = 1; result.length < n; i++) result.push(i, -i);
  return result;
};

console.log(sumZero(4));
