/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  let runningSum = [0];
  let sum = 0;
  for (const pile of piles) {
    sum += pile;
    runningSum.push(sum);
  }

  let memo = {};

  function recurse(idx = 0, m = 1, turn = 0) {
    if (idx === piles.length) return [0, 0];
    if (memo[`${idx},${m},${turn}`] !== undefined)
      return memo[`${idx},${m},${turn}`];

    let max = [0, 0];
    for (let i = 1; i <= 2 * m && idx + i <= piles.length; i++) {
      let run = [0, 0];
      run[turn] += runningSum[idx + i] - runningSum[idx];
      let next = recurse(idx + i, Math.max(m, i), (turn + 1) % 2);
      run[0] += next[0];
      run[1] += next[1];
      if (run[turn] > max[turn]) max = run;
    }

    memo[`${idx},${m},${turn}`] = max;
    return max;
  }

  return recurse()[0];
};

console.log(stoneGameII([2, 7, 9, 4, 4]));
