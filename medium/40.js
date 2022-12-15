/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = new Set();

  candidates.sort((a, b) => (a > b ? 1 : -1));

  let seen = {};

  (function recurse(sum = 0, curr = [], i = 0) {
    if (sum > target) return;
    if (!seen[curr]) seen[curr] = true;
    else return;

    if (sum === target && curr.length) {
      result.add(curr.join(","));
      return;
    }

    if (i >= candidates.length) return;
    else {
      for (let j = 0; i + j < candidates.length; j++)
        recurse(
          sum + candidates[i + j],
          [...curr, candidates[i + j]],
          i + j + 1
        );
    }
  })();

  result = [...result].map((str) =>
    str.split(",").map((char) => parseInt(char))
  );
  return result;
};

console.log(
  combinationSum2(
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    101
  )
);
