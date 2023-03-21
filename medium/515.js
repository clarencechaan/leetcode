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
var largestValues = function (root) {
  let arr = [];

  function buildArr(root, depth = 0) {
    if (!root) return;
    if (!arr[depth]) arr[depth] = [];
    arr[depth].push(root.val);
    buildArr(root.left, depth + 1);
    buildArr(root.right, depth + 1);
  }

  buildArr(root);

  arr = arr.map((row) =>
    row.reduce((max, val) => Math.max(max, val), -Infinity)
  );
  return arr;
};
