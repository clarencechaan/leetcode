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
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  return Math.max(
    diameterOfBinaryTree(root.left),
    diameterOfBinaryTree(root.right),
    depth(root.left) + depth(root.right)
  );
};

var depth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(depth(root.left), depth(root.right));
};
