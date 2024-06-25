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
var maxSumBST = function (root) {
  function getSum(node = root) {
    if (!node) return 0;
    if (node.sum !== undefined) return node.sum;
    const sum = node.val + getSum(node.left) + getSum(node.right);
    node.sum = sum;
    return sum;
  }

  function getMin(node = root) {
    if (!node) return Infinity;
    const min = Math.min(node.val, getMin(node.left), getMin(node.right));
    node.min = min;
    return min;
  }

  function getMax(node = root) {
    if (!node) return -Infinity;
    const max = Math.max(node.val, getMax(node.left), getMax(node.right));
    node.max = max;
    return max;
  }

  function isBST(node = root) {
    if (!node) return true;
    const leftIsBST = isBST(node.left);
    const rightIsBST = isBST(node.right);
    const leftKeysValid = !node.left || node.left.max < node.val;
    const rightKeysValid = !node.right || node.right.min > node.val;
    const bst = leftIsBST && rightIsBST && leftKeysValid && rightKeysValid;
    node.bst = bst;
    return bst;
  }

  function getMaxSum(node = root) {
    if (!node) return 0;
    const maxSum = Math.max(
      node.bst ? node.sum : 0,
      getMaxSum(node.left),
      getMaxSum(node.right)
    );
    return maxSum;
  }

  getSum();
  getMin();
  getMax();
  isBST();
  return getMaxSum();
};
