/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  if (n % 2 === 0) return [];

  function addNodeFromPath(root, path) {
    if (path === "L") root.left = new TreeNode();
    else if (path === "R") root.right = new TreeNode();
    else if (path[0] === "L") addNodeFromPath(root.left, path.substring(1));
    else if (path[0] === "R") addNodeFromPath(root.right, path.substring(1));
  }

  function getPathSet(n) {
    if (n === 1) return new Set([new Set([""])]);
    if (n === 3) return new Set([new Set(["L", "R"])]);

    let strSet = new Set();
    for (const set of getPathSet(n - 2)) {
      for (const node of set) {
        if (set.has(node + "L") || set.has(node + "R")) continue;
        let nextSet = new Set(set);
        nextSet.add(node + "L");
        nextSet.add(node + "R");
        let str = [...nextSet]
          .sort((a, b) =>
            a.length > b.length || (a.length === b.length && a > b) ? 1 : -1
          )
          .join(",");
        strSet.add(str);
      }
    }

    let result = new Set();
    for (const str of strSet) result.add(new Set(str.split(",")));

    return result;
  }

  let pathSet = getPathSet(n);

  let result = [];
  for (const set of pathSet) {
    let root = new TreeNode();
    for (const path of set) addNodeFromPath(root, path);
    result.push(root);
  }

  return result;
};
