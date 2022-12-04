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
var findMode = function (root) {
  let counts = {};

  function recurse(root) {
    if (!root) return;
    if (!counts[root.val]) counts[root.val] = 1;
    else counts[root.val]++;
    recurse(root.left);
    recurse(root.right);
  }

  recurse(root);

  let sorted = [];
  for (const val in counts) sorted.push([val, counts[val]]);
  sorted = sorted.sort((a, b) => (a[1] > b[1] ? -1 : 1));

  const maxCount = sorted[0][1];
  const result = sorted.filter((s) => s[1] === maxCount).map((s) => s[0]);
  return result;
};
