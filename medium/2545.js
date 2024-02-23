/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++)
      if (arr[i][k] > pivot[k]) left.push(arr[i]);
      else right.push(arr[i]);
    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  // score.sort((a, b) => (a[k] > b[k] ? -1 : 1));
  score = quickSort(score);
  return score;
};

console.log(
  sortTheStudents(
    [
      [10, 6, 9, 1],
      [7, 5, 11, 2],
      [4, 8, 3, 15],
    ],
    2
  )
);
