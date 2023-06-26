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
var maxProduct = function (root) {
  let totalSum = 0n;

  function markSums(root) {
    if (!root) return 0n;
    let sum = BigInt(root.val);
    totalSum += BigInt(root.val);
    sum += markSums(root.left);
    sum += markSums(root.right);
    root.sum = sum;
    return sum;
  }

  function maxProd(root) {
    if (!root) return 0n;
    let resultArr = [
      root.sum * (totalSum - root.sum),
      maxProd(root.left),
      maxProd(root.right),
    ];
    resultArr.sort((a, b) => (a > b ? -1 : 1));
    return resultArr[0];
  }

  markSums(root);

  return Number(maxProd(root) % (10n ** 9n + 7n));
};
