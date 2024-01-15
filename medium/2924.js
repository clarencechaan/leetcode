/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
  let champions = new Set();
  for (let i = 0; i < n; i++) champions.add(i);
  for (const [, loser] of edges) champions.delete(loser);

  if (champions.size !== 1) return -1;
  return [...champions][0];
};

console.log(
  findChampion(3, [
    [0, 1],
    [1, 2],
  ])
);
