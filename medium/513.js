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
var findBottomLeftValue = function (root) {
  let maxDepth = -1;
  let result = null;

  function traverse(root, depth = 0) {
    if (!root) return;
    if (depth > maxDepth) {
      maxDepth = depth;
      result = root.val;
    }
    traverse(root.left, depth + 1);
    traverse(root.right, depth + 1);
  }

  traverse(root);
  return result;
};
