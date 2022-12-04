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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let result = [];

  (function recurse(root, depth) {
    if (!root) return;
    if (!result[depth]) result[depth] = [];
    result[depth].push(root.val);
    recurse(root.left, depth + 1);
    recurse(root.right, depth + 1);
  })(root, 0);

  result = result.map(
    (level) => level.reduce((sum, val) => sum + val, 0) / level.length
  );

  return result;
};
