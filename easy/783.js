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
var minDiffInBST = function (root) {
  let values = [];

  (function recurse(root) {
    if (!root) return;
    values.push(root.val);
    recurse(root.left);
    recurse(root.right);
  })(root);

  values.sort((a, b) => (a > b ? 1 : -1));

  let diffs = [];
  for (let i = 0; i < values.length - 1; i++)
    diffs.push(values[i + 1] - values[i]);

  return diffs.reduce((min, val) => Math.min(min, val), Infinity);
};
