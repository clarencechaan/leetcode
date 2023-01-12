/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => (a > b ? 1 : -1));

  let min = Infinity;
  for (let i = 1; i < arr.length; i++) min = Math.min(arr[i] - arr[i - 1], min);

  let result = [];
  for (let i = 0; i < arr.length - 1; i++)
    if (arr[i + 1] - arr[i] === min) result.push([arr[i], arr[i + 1]]);

  return result;
};

console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
