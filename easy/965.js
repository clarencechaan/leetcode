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
 * @return {boolean}
 */
var isUnivalTree = function (root, val = root.val) {
  if (!root) return true;
  return (
    val === root.val &&
    isUnivalTree(root.left, val) &&
    isUnivalTree(root.right, val)
  );
};
