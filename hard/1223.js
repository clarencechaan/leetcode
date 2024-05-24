/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function (n, rollMax) {
  const dp = Array(7)
    .fill()
    .map(() =>
      Array(16)
        .fill()
        .map(() => [])
    );

  function recursion(lastDie = 0, streak = 0, rollsLeft = n) {
    if (!rollsLeft) return 1;
    if (dp[lastDie][streak][rollsLeft] >= 0)
      return dp[lastDie][streak][rollsLeft];

    let result = 0;
    for (let die = 1; die <= 6; die++)
      if (die !== lastDie) result += recursion(die, 1, rollsLeft - 1);
      else if (streak + 1 <= rollMax[die - 1])
        result += recursion(die, streak + 1, rollsLeft - 1);
    result %= 10 ** 9 + 7;

    dp[lastDie][streak][rollsLeft] = result;
    return result;
  }

  return recursion();
};

console.log(dieSimulator(20, [8, 5, 10, 8, 7, 2]));
