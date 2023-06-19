/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  let result = [];

  function getVals(root) {
    if (!root) return;
    result.push(root.val);
    getVals(root.left);
    getVals(root.right);
  }

  getVals(root1);
  getVals(root2);

  result.sort((a, b) => (a > b ? 1 : -1));
  return result;
};
