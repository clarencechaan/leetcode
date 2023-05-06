/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
  let result = [];
  let evenSum = nums.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
  let applied = [...nums];

  for (let i = 0; i < queries.length; i++) {
    let val = queries[i][0];
    let index = queries[i][1];
    let before = applied[index];
    let after = applied[index] + val;
    applied[index] = after;
    if (before % 2 !== 0 && after % 2 === 0) evenSum += after;
    else if (before % 2 === 0 && after % 2 !== 0) evenSum -= before;
    else if (before % 2 === 0 && after % 2 === 0) evenSum += after - before;
    result.push(evenSum);
  }

  return result;
};

console.log(
  sumEvenAfterQueries(
    [1, 2, 3, 4],
    [
      [1, 0],
      [-3, 1],
      [-4, 0],
      [2, 3],
    ]
  )
);
