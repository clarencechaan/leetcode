/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  let edgeMap = {};
  for (let i = 0; i < n; i++) edgeMap[i] = [];
  for (const [from, to] of edges) {
    edgeMap[from].push(to);
    edgeMap[to].push(from);
  }

  let parentsArr = [];
  let queue = new Set([0]);
  (function buildParentsArr(node) {
    if (node === undefined) {
      for (const idx of queue) buildParentsArr(idx);
      return;
    }
    for (const neighbor of edgeMap[node]) {
      if (neighbor === parentsArr[node]) continue;
      parentsArr[neighbor] = node;
      queue.add(neighbor);
    }
  })();

  let childrenArr = [];
  (function buildChildrenArr(node) {
    if (node === undefined) {
      for (let i = 0; i < n; i++) buildChildrenArr(i);
      return;
    }
    if (node)
      if (!childrenArr[parentsArr[node]])
        childrenArr[parentsArr[node]] = [node];
      else childrenArr[parentsArr[node]].push(node);
  })();

  queue = [0];
  for (let i = 0; i < queue.length; i++)
    if (childrenArr[queue[i]])
      for (const child of childrenArr[queue[i]]) queue.push(child);

  let freqMapArr = [];
  while (queue.length) {
    let node = queue.pop();
    let freqMap = Array(26).fill(0);
    freqMap[labels[node].charCodeAt() - 97] = 1;
    if (childrenArr[node])
      for (const child of childrenArr[node])
        for (let i = 0; i < 26; i++) freqMap[i] += freqMapArr[child][i];
    freqMapArr[node] = freqMap;
  }

  let ans = [];
  for (let i = 0; i < n; i++)
    ans[i] = freqMapArr[i][labels[i].charCodeAt() - 97];
  return ans;
};

console.log(
  countSubTrees(
    7,
    [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ],
    "abaedcd"
  )
);
