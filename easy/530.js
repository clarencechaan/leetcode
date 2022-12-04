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
var getMinimumDifference = function (root) {
  let vals = [];

  (function recurse(root) {
    if (!root) return;
    vals.push(root.val);
    recurse(root.left);
    recurse(root.right);
  })(root);

  vals.sort((a, b) => (a > b ? -1 : 1));
  let min = Infinity;
  for (let i = 0; i < vals.length - 1; i++)
    if (vals[i] - vals[i + 1] < min) min = vals[i] - vals[i + 1];
  return min;
};
