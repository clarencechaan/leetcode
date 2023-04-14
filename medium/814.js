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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (!root) return null;

  let left = pruneTree(root.left);
  let right = pruneTree(root.right);

  if (root.val === 0 && !left && !right) return null;
  return new TreeNode(root.val, left, right);
};
