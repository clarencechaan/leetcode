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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let result = [];

  (function traverse(root, depth = 0) {
    if (!root) return;
    if (!result[depth]) result[depth] = [];
    result[depth].push(root.val);
    traverse(root.left, depth + 1);
    traverse(root.right, depth + 1);
  })(root);

  for (let i = 1; i < result.length; i += 2) result[i].reverse();

  return result;
};
