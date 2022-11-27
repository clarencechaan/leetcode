/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangle = [[1]];
  for (let i = 1; i < numRows; i++) {
    let arr = [];
    for (let j = 0; j <= i; j++)
      arr[j] = (triangle[i - 1][j - 1] || 0) + (triangle[i - 1][j] || 0);
    triangle[i] = arr;
  }
  return triangle;
};

console.log(generate(1));
