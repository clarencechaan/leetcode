/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  let memo = [];
  function maxTime(id = 0) {
    if (memo[id] !== undefined) return memo[id];
    let max;
    if (id === headID) max = 0;
    else max = informTime[manager[id]] + maxTime(manager[id]);
    memo[id] = max;
    return max;
  }

  let result = 0;
  for (let i = 0; i < n; i++) result = Math.max(result, maxTime(i));
  return result;
};

console.log(numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]));
