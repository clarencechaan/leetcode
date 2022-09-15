/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let coords = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j]) coords.push([j, i]);
    }
  }

  let special = coords.filter((coord) =>
    coords.every(
      (other) =>
        coord === other || (coord[0] !== other[0] && coord[1] !== other[1])
    )
  );

  return special.length;
};

console.log(
  numSpecial([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
