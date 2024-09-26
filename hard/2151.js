/**
 * @param {number[][]} statements
 * @return {number}
 */
var maximumGood = function (statements) {
  const n = statements.length;

  function getCombinations(numGood) {
    const combinations = [];

    function recursion(combo = [], id = 0) {
      if (combo.length >= numGood) {
        combinations.push([...combo]);
        return;
      }
      if (id >= n) return;

      combo.push(id);
      recursion(combo, id + 1);
      combo.pop();
      recursion(combo, id + 1);
    }

    recursion();

    return combinations;
  }

  function isCombinationPossible(combo) {
    combo = new Set(combo);
    for (const i of combo)
      for (let j = 0; j < n; j++) {
        const sta = statements[i][j];

        // person i is calling j bad, but we know person j to be good
        if (sta === 0 && combo.has(j)) return false;

        // person i is calling j good, but we know person j to be bad
        if (sta === 1 && !combo.has(j)) return false;
      }

    return true;
  }

  function isNumberGoodPossible(numGood) {
    const combinations = getCombinations(numGood);
    for (const combo of combinations)
      if (isCombinationPossible(combo)) return true;
    return false;
  }

  for (let i = n; i >= 0; i--) if (isNumberGoodPossible(i)) return i;
};

console.log(
  maximumGood([
    [2, 1, 2],
    [1, 2, 2],
    [2, 0, 2],
  ])
);
