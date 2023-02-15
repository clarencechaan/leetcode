/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  const [corner1, corner2] = s.split(":");
  const startingColumn = corner1[0];
  const startingRow = parseInt(corner1[1]);
  const endingColumn = corner2[0];
  const endingRow = parseInt(corner2[1]);

  let result = [];
  for (
    let column = startingColumn;
    column <= endingColumn;
    column = String.fromCharCode(column.charCodeAt() + 1)
  )
    for (let row = startingRow; row <= endingRow; row++)
      result.push(column + row);
  return result;
};

console.log(cellsInRange("A1:F1"));
