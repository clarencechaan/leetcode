/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  const idxMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (!idxMap[arr[i]]) idxMap[arr[i]] = [];
    idxMap[arr[i]].push(i);
  }

  const steps = [];
  const queue = [[0, 0]];

  for (const [idx, stepCount] of queue) {
    if (steps[idx] <= stepCount) continue;
    steps[idx] = stepCount;

    if (idx - 1 >= 0) queue.push([idx - 1, stepCount + 1]);
    if (idx + 1 < arr.length) queue.push([idx + 1, stepCount + 1]);
    for (const nextIdx of idxMap[arr[idx]])
      queue.push([nextIdx, stepCount + 1]);

    idxMap[arr[idx]] = [];
  }

  return steps[arr.length - 1];
};

console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404]));
