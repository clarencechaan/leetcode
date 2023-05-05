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
 * @return {number}
 */
var distributeCoins = function (root) {
  function coinNodeCounts(root) {
    if (!root) return [0, 0, 0];
    let [leftCoins, leftNodes, leftMoves] = coinNodeCounts(root.left);
    let [rightCoins, rightNodes, rightMoves] = coinNodeCounts(root.right);
    let coins = leftCoins + rightCoins + root.val;
    let nodes = leftNodes + rightNodes + 1;
    let moves =
      leftMoves +
      rightMoves +
      Math.abs(leftCoins - leftNodes) +
      Math.abs(rightCoins - rightNodes);
    return [coins, nodes, moves];
  }

  return coinNodeCounts(root)[2];
};
