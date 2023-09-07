/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let max = 1;
  for (const char of n) max = Math.max(max, parseInt(char));
  return max;
};

console.log(minPartitions("32"));
