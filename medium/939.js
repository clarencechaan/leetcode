/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {
  let map = {};
  for (const [i, j] of points) {
    if (!map[i]) map[i] = { set: new Set(), arr: [] };
    map[i].set.add(j);
    map[i].arr.push(j);
  }

  let min = Infinity;
  let entries = Object.entries(map);
  for (let i = 0; i < entries.length - 1; i++) {
    let row1 = parseInt(entries[i][0]);
    for (let j = i + 1; j < entries.length; j++) {
      let row2 = parseInt(entries[j][0]);
      for (let k = 0; k < entries[i][1].arr.length - 1; k++) {
        let col1 = entries[i][1].arr[k];
        for (let l = k + 1; l < entries[i][1].arr.length; l++) {
          let col2 = entries[i][1].arr[l];
          if (entries[j][1].set.has(col1) && entries[j][1].set.has(col2))
            min = Math.min(min, Math.abs(row2 - row1) * Math.abs(col2 - col1));
        }
      }
    }
  }

  return min === Infinity ? 0 : min;
};

console.log(
  minAreaRect([
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
    [2, 2],
  ])
);
