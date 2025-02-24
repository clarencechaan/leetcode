/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
  if (d > jobDifficulty.length) return -1;

  const memo = {};
  function recursiveMinDifficulty(
    idx = 0,
    daysLeft = d,
    max = jobDifficulty[idx]
  ) {
    if (daysLeft < 0) return Infinity;

    if (idx >= jobDifficulty.length) {
      if (daysLeft === 0) return max ?? 0;
      return Infinity;
    }

    const str = `${idx},${daysLeft},${max}`;
    if (memo[str] !== undefined) return memo[str];

    const continueDay = recursiveMinDifficulty(
      idx + 1,
      daysLeft,
      Math.max(max, jobDifficulty[idx + 1] ?? 0)
    );
    const finishDay = max + recursiveMinDifficulty(idx + 1, daysLeft - 1);

    const min = Math.min(continueDay, finishDay);
    memo[str] = min;
    return min;
  }

  return recursiveMinDifficulty();
};
