/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  function labelToRowColumn(label) {
    let row = Math.floor(Math.log(label) / Math.log(2));
    let col =
      row % 2 === 1
        ? 2 * Math.pow(2, row) - label - 1
        : label - Math.pow(2, row);
    return [row, col];
  }

  function rowColToLabel(row, col) {
    return row % 2 === 1
      ? Math.pow(2, row + 1) - 1 - col
      : Math.pow(2, row) + col;
  }

  let result = [label];
  let [row, col] = labelToRowColumn(label);

  while (row || col) {
    row--;
    col = Math.floor(col / 2);
    result.push(rowColToLabel(row, col));
  }

  result.reverse();
  return result;
};

console.log(pathInZigZagTree(26));
