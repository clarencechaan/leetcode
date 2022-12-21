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
var generateTrees = function (n) {
  let permutations = [];
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);

  (function buildPermutations(curr = [], remaining = arr) {
    if (!remaining.length) permutations.push(curr);
    for (let i = 0; i < remaining.length; i++)
      buildPermutations(
        [...curr, remaining[i]],
        [...remaining.slice(0, i), ...remaining.slice(i + 1)]
      );
  })();

  function buildTree(permutation) {
    let remaining = [...permutation].reverse();
    let tree = new TreeNode(remaining.pop());
    let curr = tree;

    while (remaining.length) {
      if (remaining[remaining.length - 1] > curr.val) {
        if (!curr.right) {
          curr.right = new TreeNode(remaining.pop());
          curr = tree;
        } else curr = curr.right;
      } else if (remaining[remaining.length - 1] < curr.val) {
        if (!curr.left) {
          curr.left = new TreeNode(remaining.pop());
          curr = tree;
        } else curr = curr.left;
      }
    }

    return tree;
  }

  permutations = permutations.map((permutation) => buildTree(permutation));

  let result = [];
  let seen = new Set();

  function treeToString(tree) {
    if (!tree) return "";
    return tree.val + treeToString(tree.left) + treeToString(tree.right);
  }

  for (const permutation of permutations) {
    const str = treeToString(permutation);
    if (!seen.has(str)) {
      result.push(permutation);
      seen.add(str);
    }
  }

  return result;
};

console.log(generateTrees(4));

// 1 3 2
// 1 2 3
// 2 1 3
// 3 2 1
// 3 1 2
