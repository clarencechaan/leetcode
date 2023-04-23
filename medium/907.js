/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = Infinity;
    for (let j = i; j < arr.length; j++) {
      min = Math.min(min, arr[j]);
      sum += min;
    }
    sum = sum % (10 ** 9 + 7);
  }
  return sum;
};

console.log(sumSubarrayMins([11, 81, 94, 43, 3]));
