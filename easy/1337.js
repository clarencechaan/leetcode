/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let strengths = [];
  for (let i = 0; i < mat.length; i++)
    strengths.push({
      idx: i,
      strength: mat[i].reduce(
        (count, person) => (person ? count + 1 : count),
        0
      ),
    });

  strengths.sort((a, b) => (a.strength >= b.strength ? 1 : -1));

  return strengths.slice(0, k).map((obj) => obj.idx);
};

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);
