/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  let numsSorted = [...nums].sort((a, b) => (a > b ? 1 : -1));
  let queriesSorted = queries
    .map((val, idx) => ({
      val,
      idx,
    }))
    .sort((a, b) => (a.val > b.val ? 1 : -1));

  let result = [];
  let sum = 0;
  let idx = 0;

  for (let i = 0; i < queriesSorted.length; i++) {
    while (
      idx <= numsSorted.length &&
      sum + numsSorted[idx] <= queriesSorted[i].val
    ) {
      sum += numsSorted[idx];
      idx++;
    }
    result[queriesSorted[i].idx] = idx;
  }

  return result;
};

console.log(answerQueries([2, 3, 4, 5], [1]));
