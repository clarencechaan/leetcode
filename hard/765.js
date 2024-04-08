/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
  // convert each member of each couple to be the equal
  for (let i = 0; i < row.length; i++) if (row[i] % 2 === 1) row[i]--;

  function makeSwap(row) {
    for (let a1 = 0; a1 < row.length; a1 += 2) {
      for (let b1 = a1 + 2; b1 < row.length; b1 += 2) {
        const a2 = a1 + 1;
        const b2 = b1 + 1;

        // try swap a1 b1
        [row[a1], row[b1]] = [row[b1], row[a1]];
        if (row[a1] === row[a2] || row[b1] === row[b2]) return true;
        [row[a1], row[b1]] = [row[b1], row[a1]];

        // try swap a1 b2
        [row[a1], row[b2]] = [row[b2], row[a1]];
        if (row[a1] === row[a2] || row[b1] === row[b2]) return true;
        [row[a1], row[b2]] = [row[b2], row[a1]];
      }
    }
  }

  let result = 0;
  while (makeSwap(row)) result++;
  return result;
};

console.log(minSwapsCouples([0, 2, 1, 3]));
