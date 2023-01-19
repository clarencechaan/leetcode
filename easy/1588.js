/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    result += sum;
    for (let j = i + 2; j < arr.length; j += 2) {
      sum += arr[j - 1] + arr[j];
      result += sum;
    }
  }

  return result;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
