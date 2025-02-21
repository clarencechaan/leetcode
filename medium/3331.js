/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */
var findSubtreeSizes = function (parent, s) {
  const n = parent.length;
  const nodes = Array(n)
    .fill()
    .map((_, id) => ({ id, char: s[id], children: [] }));

  for (let i = 0; i < n; i++) nodes[parent[i]]?.children.push(i);

  const closests = [...parent];
  function dfs(id = 0, charMap = {}) {
    const { char, children } = nodes[id];
    const closest = charMap[char]?.at(-1);

    if (closest >= 0) closests[id] = closest;
    if (!charMap[char]) charMap[char] = [];
    charMap[char].push(id);
    children.forEach((child) => dfs(child, charMap));
    charMap[char].pop();
  }

  dfs();

  const nodesAfter = Array(n)
    .fill()
    .map((_, id) => ({ id, char: s[id], children: [] }));

  for (let i = 0; i < n; i++) nodesAfter[closests[i]]?.children.push(i);

  const sizeMap = [];
  function getSize(id = 0) {
    if (sizeMap[id]) return sizeMap[id];
    const size =
      1 +
      nodesAfter[id].children.reduce((sum, child) => sum + getSize(child), 0);
    sizeMap[id] = size;
    return size;
  }

  for (let i = 0; i < n; i++) getSize(i);

  return sizeMap;
};
