/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function (n) {
  const COLOURS = ["R", "G", "B"];
  const ROW_COMBINATIONS = [];
  for (const a of COLOURS)
    for (const b of COLOURS)
      for (const c of COLOURS)
        if (a !== b && b !== c) ROW_COMBINATIONS.push(a + b + c);

  const dp = { "###": [] };
  for (const combo of ROW_COMBINATIONS) dp[combo] = [];

  function recursion(idx = 0, prevRow = "###") {
    if (idx === n) return 1;
    if (dp[prevRow][idx]) return dp[prevRow][idx];

    let result = 0;
    for (const combo of ROW_COMBINATIONS)
      if (
        combo[0] !== prevRow[0] &&
        combo[1] !== prevRow[1] &&
        combo[2] !== prevRow[2]
      )
        result += recursion(idx + 1, combo);

    result %= 10 ** 9 + 7;
    dp[prevRow][idx] = result;
    return result;
  }

  return recursion();
};

console.log(numOfWays(1));
