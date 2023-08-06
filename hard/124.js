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
var maxPathSum = function (root) {
  function markSums(root) {
    if (!root) return;
    markSums(root.left);
    markSums(root.right);
    root.sum =
      root.val + Math.max(root.left?.sum || 0, root.right?.sum || 0, 0);
  }

  markSums(root);

  function getMax(root) {
    if (!root) return -Infinity;
    return Math.max(
      root.val +
        Math.max(root.left?.sum || 0, 0) +
        Math.max(root.right?.sum || 0, 0),
      getMax(root.left),
      getMax(root.right)
    );
  }

  return getMax(root);
};
