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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function (root, n, x) {
  let numNodesConnectedToParent = 0;
  let numNodesConnectedToLeft = 0;
  let numNodesConnectedToRight = 0;

  function countNodesConnectedToParent(root) {
    if (!root) return;
    if (root.val === x) {
      countNodesConnectedToLeft(root.left);
      countNodesConnectedToRight(root.right);
      return;
    }
    numNodesConnectedToParent++;
    countNodesConnectedToParent(root.left);
    countNodesConnectedToParent(root.right);
  }

  function countNodesConnectedToLeft(root) {
    if (!root) return;
    numNodesConnectedToLeft++;
    countNodesConnectedToLeft(root.left);
    countNodesConnectedToLeft(root.right);
  }

  function countNodesConnectedToRight(root) {
    if (!root) return;
    numNodesConnectedToRight++;
    countNodesConnectedToRight(root.left);
    countNodesConnectedToRight(root.right);
  }

  countNodesConnectedToParent(root);

  let sorted = [
    numNodesConnectedToParent,
    numNodesConnectedToLeft,
    numNodesConnectedToRight,
  ].sort((a, b) => (a > b ? -1 : 1));

  return sorted[0] > sorted[1] + sorted[2];
};
