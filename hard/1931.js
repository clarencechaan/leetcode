/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var colorTheGrid = function (m, n) {
  // returns all possible cell values that may appear in a row
  function getRowCombinatinos() {
    let combinations = [[]];
    for (let i = 0; i < m; i++) {
      const newCombinations = [];
      for (const combination of combinations) {
        const lastElem = combination[combination.length - 1];
        if (lastElem !== "R") newCombinations.push([...combination, "R"]);
        if (lastElem !== "G") newCombinations.push([...combination, "G"]);
        if (lastElem !== "B") newCombinations.push([...combination, "B"]);
      }
      combinations = newCombinations;
    }
    return combinations;
  }

  const combinations = getRowCombinatinos();

  // returns true if `combination2` is valid given the row above it
  // `combination1`
  function isValid(combination1, combination2) {
    for (let i = 0; i < m; i++)
      if (combination1[i] === combination2[i]) return false;
    return true;
  }

  // returns the indices of every combination that is compatible with
  // `combination`;
  function getValidCombinations(combination) {
    const indices = [];
    for (let i = 0; i < combinations.length; i++)
      if (isValid(combinations[i], combination)) indices.push(i);
    return indices;
  }

  const validIndices = [];
  for (let i = 0; i < combinations.length; i++)
    validIndices.push(getValidCombinations(combinations[i]));
  validIndices[-1] = Array(combinations.length)
    .fill()
    .map((_, idx) => idx);

  // return the number of ways to paint the grid from row `row` to row `n-1`
  // given the previous combination index used
  function numOfWays(
    prev = -1,
    row = 0,
    dp = Array(combinations.length)
      .fill()
      .map(() => [])
  ) {
    if (row >= n) return 1;
    if (prev >= 0 && dp[prev][row] >= 0) return dp[prev][row];
    const valid = validIndices[prev];
    let result = 0;
    for (const idx of valid) result += numOfWays(idx, row + 1, dp);
    result %= 10 ** 9 + 7;
    if (prev >= 0) dp[prev][row] = result;
    return result;
  }

  return numOfWays();
};

console.log(colorTheGrid(1, 1));
