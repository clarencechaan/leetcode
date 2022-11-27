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
var minDepth = function (root) {
  function recurse(root) {
    if (!root) return Infinity;
    if (!root.left && !root.right) return 1;
    return 1 + Math.min(recurse(root.left), recurse(root.right));
  }

  if (!root) return 0;
  return recurse(root);
};
