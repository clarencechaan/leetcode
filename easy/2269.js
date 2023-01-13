/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let str = num.toString();
  let result = 0;
  for (let i = 0; i + k <= str.length; i++)
    if (num % parseInt(str.substring(i, i + k)) === 0) result++;
  return result;
};

console.log(divisorSubstrings(430043, 2));
