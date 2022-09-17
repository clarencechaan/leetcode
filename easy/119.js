/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let triangle = [[1]];

  for (let i = 1; i <= rowIndex; i++) {
    let row = [];
    for (let j = 0; j < triangle[i - 1].length + 1; j++) {
      if (j === 0 || j === triangle[i - 1].length) row.push(1);
      else row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
    triangle.push(row);
  }

  return triangle[rowIndex];
};

console.log(getRow(4));
