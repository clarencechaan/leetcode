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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  const kSums = [];

  function addKSums(root, depth = 0) {
    if (!root) return;

    if (!kSums[depth]) kSums[depth] = 0;
    kSums[depth] += root.val;

    addKSums(root.left, depth + 1);
    addKSums(root.right, depth + 1);
  }

  addKSums(root);

  kSums.sort((a, b) => (a > b ? -1 : 1));

  return kSums[k - 1] || -1;
};
