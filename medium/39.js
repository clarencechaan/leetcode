/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = new Set();

  (function recurse(sum = 0, curr = []) {
    if (sum === target && curr.length) {
      const normalized = curr.sort().join(",");
      result.add(normalized);
    } else if (sum > target) return;
    else
      for (let i = 0; i < candidates.length; i++)
        recurse(sum + candidates[i], [...curr, candidates[i]]);
  })();

  result = [...result].map((arr) =>
    arr.split(",").map((char) => parseInt(char))
  );
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
