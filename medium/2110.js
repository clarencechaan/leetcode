/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
  // smooth descent period: subarray of >= 1 contiguous days where each element is equal to the previous element minus 1
  // idea: find longest smooth descent period at index i
  //    => let length of this period be "n"
  //    => add n*(n+1)/2 to result
  //    => repeat with i = i + length, until i >= prices.length

  let result = 0;
  for (let i = 0; i < prices.length; ) {
    let length = 1;
    while (prices[i + length] === prices[i + length - 1] - 1) length++;
    result += (length * (length + 1)) / 2;
    i = i + length;
  }

  return result;
};

console.log(getDescentPeriods([3, 2, 1, 4]));
