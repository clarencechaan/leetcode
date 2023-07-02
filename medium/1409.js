/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  let permutation = [];
  let result = [];

  for (let i = 1; i <= m; i++) permutation.push(i);

  for (const query of queries) {
    let idx = permutation.indexOf(query);
    result.push(idx);
    permutation = [
      query,
      ...permutation.slice(0, idx),
      ...permutation.slice(idx + 1),
    ];
  }

  return result;
};

console.log(processQueries([3, 1, 2, 1], 5));
