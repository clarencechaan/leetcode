/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  let edgeMap = {};
  for (const [i, j] of pairs) {
    if (!edgeMap[i]) edgeMap[i] = [];
    if (!edgeMap[j]) edgeMap[j] = [];
    edgeMap[i].push(j);
    edgeMap[j].push(i);
  }

  let swapMap = {};
  function getPossibleSwaps(start, curr = start, history = new Set()) {
    if (history.has(curr) || swapMap[start]) return;
    history.add(curr);
    for (const neighbour of edgeMap[curr] || [])
      getPossibleSwaps(start, neighbour, history);
    if (start === curr) for (const h of history) swapMap[h] = history;
  }

  for (let i = 0; i < s.length; i++) getPossibleSwaps(i);

  let arr = s.split("");
  let idxGroups = new Set(Object.entries(swapMap).map((arr) => arr[1]));
  for (let indices of idxGroups) {
    indices = [...indices].sort((a, b) => (a > b ? 1 : -1));
    let letters = indices.map((idx) => s[idx]).sort((a, b) => (a > b ? 1 : -1));
    for (let j = 0; j < indices.length; j++) arr[indices[j]] = letters[j];
  }

  let result = arr.join("");
  return result;
};

console.log(
  smallestStringWithSwaps("dcab", [
    [0, 3],
    [1, 2],
  ])
);
