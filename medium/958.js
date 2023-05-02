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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  let rows = [];

  function traverse(root, i = 0, j = 0) {
    if (!root) return;
    if (!rows[i]) rows[i] = [];
    rows[i][j] = root.val;
    traverse(root.left, i + 1, 2 * j);
    traverse(root.right, i + 1, 2 * j + 1);
  }

  traverse(root);

  for (let i = 0; i < rows.length - 1; i++) {
    rows[i] = rows[i].filter((val) => val);
    if (rows[i].length !== Math.pow(2, i)) return false;
  }
  for (const val of rows[rows.length - 1]) if (!val) return false;

  return true;
};
