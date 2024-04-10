/**
 * @param {number[]} parents
 * @param {number[][]} queries
 * @return {number[]}
 */
var maxGeneticDifference = function (parents, queries) {
  const n = parents.length;
  const root = parents.findIndex((parent) => parent === -1);

  const nodes = Array(n)
    .fill()
    .map((_, val) => ({ val, children: [] }));

  for (let i = 0; i < parents.length; i++) nodes[parents[i]]?.children.push(i);

  const nodeToVals = {};
  for (const [node, val] of queries)
    if (nodeToVals[node]) nodeToVals[node].push(val);
    else nodeToVals[node] = [val];

  const ansMap = {};
  for (const node in nodeToVals) ansMap[node] = {};

  function traverse(node, trie = {}) {
    let curr = trie;
    let binary = node.toString(2);
    if (binary.length < 18) binary = "0".repeat(18 - binary.length) + binary;
    let created;
    for (const bit of binary) {
      if (!curr[bit]) {
        curr[bit] = {};
        if (!created) created = [curr, bit];
      }
      curr = curr[bit];
    }
    for (const val of nodeToVals[node] || []) {
      let binVal = val.toString(2);
      if (binVal.length < 18) binVal = "0".repeat(18 - binVal.length) + binVal;
      let max = "";
      curr = trie;
      for (let i = 0; i < 18; i++) {
        if (binVal[i] === "0") {
          if (curr[1]) {
            curr = curr[1];
            max += "1";
          } else {
            curr = curr[0];
            max += "0";
          }
        } else if (binVal[i] === "1") {
          if (curr[0]) {
            curr = curr[0];
            max += "1";
          } else {
            curr = curr[1];
            max += "0";
          }
        }
      }
      max = parseInt(max, 2);
      ansMap[node][val] = max;
    }
    for (const child of nodes[node].children) traverse(child, trie);
    delete created[0][created[1]];
  }

  traverse(root);

  const ans = [];
  for (const [node, val] of queries) ans.push(ansMap[node][val]);
  return ans;
};

console.log(
  maxGeneticDifference(
    [-1, 0, 1, 1],
    [
      [0, 2],
      [3, 2],
      [2, 5],
    ]
  )
);
