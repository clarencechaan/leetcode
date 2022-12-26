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
var sumNumbers = function (root) {
  let total = 0;

  (function traverse(root, str = "") {
    if (!root) return;
    else if (!root.left && !root.right) total += parseInt(str + root.val);
    else {
      traverse(root.left, str + root.val);
      traverse(root.right, str + root.val);
    }
  })(root);

  return total;
};
