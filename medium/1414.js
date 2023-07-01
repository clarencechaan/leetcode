/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  let arr = [1];

  while (arr[arr.length - 1] < k)
    arr.push(arr[arr.length - 1] + (arr[arr.length - 2] || 0));

  let sum = 0;
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (sum + arr[i] < k) {
      sum += arr[i];
      count++;
    } else if (sum + arr[i] === k) return count + 1;
  }
};

console.log(findMinFibonacciNumbers(7));
