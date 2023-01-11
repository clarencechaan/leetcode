/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let uniqueSorted = [...new Set(arr)].sort((a, b) => (a > b ? 1 : -1));

  let ranks = {};
  for (let i = 0; i < uniqueSorted.length; i++) ranks[uniqueSorted[i]] = i + 1;

  let result = [];
  for (let i = 0; i < arr.length; i++) result[i] = ranks[arr[i]];
  return result;
};

console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));
