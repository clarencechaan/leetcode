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
var convertBST = function (root) {
  let vals = [];

  function buildVals(root) {
    if (!root) return;
    vals.push(root.val);
    buildVals(root.left);
    buildVals(root.right);
  }

  buildVals(root);

  vals.sort((a, b) => (a > b ? -1 : 1));
  let map = {};

  let sum = 0;
  for (let i = 0; i < vals.length; i++) {
    sum += vals[i];
    map[vals[i]] = sum;
  }

  function convertVals(root) {
    if (!root) return;
    root.val = map[root.val];
    convertVals(root.left);
    convertVals(root.right);
  }

  convertVals(root);
  return root;
};
