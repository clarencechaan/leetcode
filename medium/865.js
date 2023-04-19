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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
  let arr = [];

  function traverse(root, i = 0, j = 0) {
    if (!root) return;
    if (!arr[i]) arr[i] = {};
    arr[i][j] = root;
    traverse(root.left, i + 1, 2 * j);
    traverse(root.right, i + 1, 2 * j + 1);
  }

  traverse(root);

  function mutualParent(i, j1, j2) {
    if (j1 === j2) return arr[i][j2];
    return mutualParent(i - 1, Math.floor(j1 / 2), Math.floor(j2 / 2));
  }

  let i = arr.length - 1;
  let entries = Object.entries(arr[i]);
  let j1 = parseInt(entries[0][0]);
  let j2 = parseInt(entries[entries.length - 1][0]);

  return mutualParent(i, j1, j2);
};
