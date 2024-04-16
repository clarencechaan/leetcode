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
var averageOfSubtree = function (root) {
  function getSubtreeSize(root) {
    if (!root) return 0;
    const size = 1 + getSubtreeSize(root.left) + getSubtreeSize(root.right);
    root.size = size;
    return size;
  }

  function getSubtreeSum(root) {
    if (!root) return 0;
    const sum = root.val + getSubtreeSum(root.left) + getSubtreeSum(root.right);
    root.sum = sum;
    return sum;
  }

  function getNumOfSubtreeAvgEqual(root) {
    if (!root) return 0;
    const count =
      (root.val === Math.floor(root.sum / root.size) ? 1 : 0) +
      getNumOfSubtreeAvgEqual(root.left) +
      getNumOfSubtreeAvgEqual(root.right);
    return count;
  }

  getSubtreeSize(root);
  getSubtreeSum(root);

  return getNumOfSubtreeAvgEqual(root);
};
