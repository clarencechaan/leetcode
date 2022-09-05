/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
// 1) check each row is valid
//  a) check array
// 2) check each column is valid
//  a) create array from column
//  b) check array
// return true if all array checks are true; false otherwise
var checkValid = function (matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    if (!checkArr(matrix[i])) return false;
  }

  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(matrix[j][i]);
    }
    if (!checkArr(arr)) return false;
  }

  return true;
};

function checkArr(arr) {
  const n = arr.length;
  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) return false;
  }
  return true;
}

console.log(
  checkArr([
    [1, 1, 1],
    [1, 2, 3],
    [1, 2, 3],
  ])
);
