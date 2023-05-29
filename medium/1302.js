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
var deepestLeavesSum = function (root) {
  let maxDepth = 0;
  let sum = 0;

  function traverse(root, depth = 0) {
    if (!root) return;
    if (depth > maxDepth) {
      sum = 0;
      maxDepth = depth;
    }
    if (depth === maxDepth) sum += root.val;
    traverse(root.left, depth + 1);
    traverse(root.right, depth + 1);
  }

  traverse(root);

  return sum;
};
