/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  let elements = [];
  let min = Infinity;
  for (const row of grid)
    for (const cell of row) {
      min = Math.min(min, cell);
      elements.push(cell);
    }

  for (let i = 0; i < elements.length; i++) {
    elements[i] = (elements[i] - min) / x;
    if (elements[i] % 1 !== 0) return -1;
  }

  elements.sort((a, b) => (a > b ? 1 : -1));

  let arr = [...new Set(elements)];
  function operations(target) {
    let count = 0;
    for (const elem of elements) count += Math.abs(target - elem);
    return count;
  }

  min = 0;
  max = arr.length - 1;
  let mid = Math.floor((min + max) / 2);
  while (min < max) {
    if (operations(arr[mid]) > operations(arr[mid + 1])) min = mid + 1;
    else max = mid;
    mid = Math.floor((min + max) / 2);
  }

  return operations(arr[mid]);
};

console.log(
  minOperations(
    [
      [2, 4],
      [6, 8],
    ],
    2
  )
);
