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
var goodNodes = function (root) {
  let result = 0;

  (function traverse(root, max = -Infinity) {
    if (!root) return;
    if (root.val >= max) result++;
    traverse(root.left, Math.max(max, root.val));
    traverse(root.right, Math.max(max, root.val));
  })(root);

  return result;
};
