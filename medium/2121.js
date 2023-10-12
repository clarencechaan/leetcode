/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function (arr) {
  let idxMap = {};
  for (let i = 0; i < arr.length; i++)
    if (!idxMap[arr[i]]) idxMap[arr[i]] = [i];
    else idxMap[arr[i]].push(i);

  let result = [];
  function writeDistance(x) {
    let length = idxMap[x].length;
    let arr = [
      0,
      idxMap[x].reduce((sum, val) => sum + Math.abs(val - idxMap[x][0]), 0),
    ];
    result[idxMap[x][0]] = arr[0] + arr[1];

    for (let i = 1; i < length; i++) {
      let diff = idxMap[x][i] - idxMap[x][i - 1];
      arr[0] += i * diff;
      arr[1] -= (length - i) * diff;
      result[idxMap[x][i]] = arr[0] + arr[1];
    }
  }

  for (let x in idxMap) writeDistance(x);

  return result;
};

console.log(getDistances([2, 1, 3, 1, 2, 3, 3]));
