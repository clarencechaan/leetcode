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
var isEvenOddTree = function (root) {
  let arrs = [];

  (function traverse(root, depth = 0) {
    if (!root) return;
    if (!arrs[depth]) arrs[depth] = [];
    arrs[depth].push(root.val);
    traverse(root.left, depth + 1);
    traverse(root.right, depth + 1);
  })(root);

  for (let i = 0; i < arrs.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < arrs[i].length; j++)
        if (arrs[i][j] % 2 === 0 || arrs[i][j] <= arrs[i][j - 1]) return false;
    } else {
      for (let j = 0; j < arrs[i].length; j++)
        if (arrs[i][j] % 2 === 1 || arrs[i][j] >= arrs[i][j - 1]) return false;
    }
  }

  return true;
};
