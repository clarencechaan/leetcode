/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
  // idea:
  // 1. create a node for each string
  // 2. connect nodes that are similar
  // 3. dfs each node to find each group
  // 4. return the number of groups

  strs = [...new Set(strs)];

  function areStringsSimilar(str1, str2) {
    let diffs = [];
    for (let i = 0; i < str1.length; i++)
      if (str1[i] !== str2[i]) diffs.push(i);
    if (diffs.length !== 2) return false;
    const [i, j] = diffs;
    return str1[i] === str2[j] && str1[j] === str2[i];
  }

  const nodes = strs.map((str) => ({ str, neighbours: [] }));
  for (let i = 0; i < nodes.length; i++)
    for (let j = i + 1; j < nodes.length; j++)
      if (areStringsSimilar(nodes[i].str, nodes[j].str)) {
        nodes[i].neighbours.push(j);
        nodes[j].neighbours.push(i);
      }

  const seen = new Set();

  // return true if node has not been seen; otherwise return false
  function dfs(node) {
    if (seen.has(node)) return false;
    seen.add(node);
    for (const neighbour of nodes[node].neighbours) dfs(neighbour);
    return true;
  }

  let ans = 0;
  for (let node = 0; node < nodes.length; node++) if (dfs(node)) ans++;
  return ans;
};

console.log(numSimilarGroups(["tars", "rats", "arts", "star"]));
