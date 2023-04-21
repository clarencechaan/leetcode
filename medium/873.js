/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  let set = new Set(arr);

  let max = 2;
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++) {
      let one = arr[i];
      let two = arr[j];
      let sum = one + two;
      let count = 2;
      while (set.has(sum)) {
        count++;
        [one, two, sum] = [two, sum, two + sum];
      }
      max = Math.max(max, count);
    }

  return max >= 3 ? max : 0;
};

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]));
