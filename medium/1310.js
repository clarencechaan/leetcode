/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  let answer = [];
  for (const [left, right] of queries) {
    let xor = arr[left];
    for (let i = left + 1; i <= right; i++) xor = xor ^ arr[i];
    answer.push(xor);
  }

  return answer;
};

console.log(
  xorQueries(
    [1, 3, 4, 8],
    [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 3],
    ]
  )
);
