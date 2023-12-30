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
 * @return {string[][]}
 */
var printTree = function (root) {
  function getHeight(root) {
    if (!root) return -1;
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
  }

  const height = getHeight(root);
  const n = 2 ** (height + 1) - 1;

  let result = [];
  for (let i = 1; i <= height + 1; i++) result.push(Array(n).fill(""));

  function placeNodes(node = root, r = 0, c = (n - 1) / 2) {
    if (!node) return;
    result[r][c] = node.val.toString();
    placeNodes(node.left, r + 1, c - 2 ** (height - r - 1));
    placeNodes(node.right, r + 1, c + 2 ** (height - r - 1));
  }

  placeNodes();

  return result;
};
