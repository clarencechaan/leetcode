/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function (obstacles) {
  const n = obstacles.length;
  let jumps = 0;
  let idx = 0;
  let lane = 2;

  function nextIdx(idx, lane) {
    if (obstacles[idx] === lane) return idx;
    while (idx < n - 1 && obstacles[idx + 1] !== lane) idx++;
    return idx;
  }

  idx = nextIdx(idx, lane);
  while (idx < n - 1) {
    jumps++;
    let lane0 = 1 + (lane % 3);
    let idx0 = nextIdx(idx, lane0);
    let lane1 = 1 + ((lane + 1) % 3);
    let idx1 = nextIdx(idx, lane1);
    if (idx0 > idx1) {
      idx = idx0;
      lane = lane0;
    } else {
      idx = idx1;
      lane = lane1;
    }
  }

  return jumps;
};

console.log(minSideJumps([0, 1, 2, 3, 0]));
