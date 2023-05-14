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
var bstToGst = function (root) {
  let arr = [];

  function buildArr(root) {
    if (!root) return;
    arr[root.val] = root.val;
    buildArr(root.left);
    buildArr(root.right);
  }

  buildArr(root);

  for (let i = 99; i >= 0; i--) arr[i] = (arr[i] || 0) + (arr[i + 1] || 0);

  function convertTree(root) {
    if (!root) return;
    root.val = arr[root.val];
    convertTree(root.left);
    convertTree(root.right);
  }

  convertTree(root);

  return root;
};
