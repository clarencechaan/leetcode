/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let idxMap = {};
  for (let i = 0; i < values.length; i++)
    if (!idxMap[values[i]]) idxMap[values[i]] = [i];
    else idxMap[values[i]].push(i);

  let max = 0;
  for (const a in idxMap)
    for (const b in idxMap) {
      if (a > b || (a === b && idxMap[a] <= 1)) continue;
      let minDistance = Infinity;
      if (a === b) {
        for (let i = 1; i < idxMap[a].length; i++)
          minDistance = Math.min(minDistance, idxMap[a][i] - idxMap[a][i - 1]);
      } else {
        let i = 0;
        let j = 0;
        let fromArr;
        let idx;
        while (i < idxMap[a].length || j < idxMap[b].length) {
          let prevIdx = idx;
          let prevFromArr = fromArr;
          if (j === idxMap[b].length || idxMap[a][i] < idxMap[b][j]) {
            fromArr = 0;
            idx = idxMap[a][i];
            i++;
          } else {
            fromArr = 1;
            idx = idxMap[b][j];
            j++;
          }
          if (prevIdx !== undefined && fromArr !== prevFromArr)
            minDistance = Math.min(minDistance, idx - prevIdx);
        }
      }
      max = Math.max(max, parseInt(a) + parseInt(b) - minDistance);
    }

  return max;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
