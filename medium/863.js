/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  let ij = {};

  function traverse(root, i = 0, j = 0) {
    if (!root) return;
    ij[root.val] = { i, j };
    traverse(root.left, i + 1, 2 * j);
    traverse(root.right, i + 1, 2 * j + 1);
  }

  traverse(root);

  function distance(i1, j1, i2, j2) {
    if (i1 === i2 && j1 === j2) return 0;
    if (i1 === i2)
      return (
        2 + distance(i1 - 1, Math.floor(j1 / 2), i2 - 1, Math.floor(j2 / 2))
      );
    if (i1 > i2) return 1 + distance(i1 - 1, Math.floor(j1 / 2), i2, j2);
    if (i1 < i2) return 1 + distance(i1, j1, i2 - 1, Math.floor(j2 / 2));
  }

  let result = [];
  for (const node in ij) {
    if (
      distance(ij[target.val].i, ij[target.val].j, ij[node].i, ij[node].j) === k
    )
      result.push(parseInt(node));
  }
  return result;
};
