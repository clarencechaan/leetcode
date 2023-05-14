/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  let sums = [];

  function buildSums(root, depth = 1) {
    if (!root) return;
    sums[depth] = (sums[depth] || 0) + root.val;
    buildSums(root.left, depth + 1);
    buildSums(root.right, depth + 1);
  }

  buildSums(root);

  let maxIdx = 1;
  for (let i = 2; i < sums.length; i++) if (sums[i] > sums[maxIdx]) maxIdx = i;
  return maxIdx;
};
