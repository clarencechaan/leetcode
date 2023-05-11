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
var maxAncestorDiff = function (root) {
  function maxDiffFromNode(root, val) {
    if (!root) return 0;
    return Math.max(
      Math.abs(val - root?.left?.val || 0),
      Math.abs(val - root?.right?.val || 0),
      maxDiffFromNode(root.left, val),
      maxDiffFromNode(root.right, val)
    );
  }

  function traverse(root) {
    if (!root) return 0;
    return Math.max(
      maxDiffFromNode(root, root.val),
      traverse(root.left),
      traverse(root.right)
    );
  }

  return traverse(root);
};
