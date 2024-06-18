/**
 * @param {number[][]} tires
 * @param {number} changeTime
 * @param {number} numLaps
 * @return {number}
 */
var minimumFinishTime = function (tires, changeTime, numLaps) {
  // using one tire find fastest way to get 1, 2, 3, ..., n laps

  const fastest = Array(16).fill(Infinity);

  for (let tire = 0; tire < tires.length; tire++) {
    const [f, r] = tires[tire];
    let cost = f;
    for (let streak = 1; streak < fastest.length; streak++) {
      fastest[streak] = Math.min(fastest[streak], cost);
      cost += f * r ** streak;
    }
  }

  const dp = [];
  function recursion(lap = 0) {
    if (lap >= numLaps) return 0;
    if (dp[lap] >= 0) return dp[lap];

    let result = Infinity;
    for (let streak = 1; streak < fastest.length; streak++) {
      result = Math.min(
        result,
        (lap > 0 ? changeTime : 0) + fastest[streak] + recursion(lap + streak)
      );
    }

    dp[lap] = result;
    return result;
  }

  return recursion();
};

console.log(
  minimumFinishTime(
    [
      [2, 3],
      [3, 4],
    ],
    5,
    4
  )
);
