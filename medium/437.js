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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let result = 0;

  function traverse(root, sum = 0, sums = { 0: 1 }) {
    if (!root) return;
    sum += root.val;
    result += sums[sum - targetSum] || 0;
    let nextSums = { ...sums, [sum]: (sums[sum] || 0) + 1 };
    traverse(root.left, sum, nextSums);
    traverse(root.right, sum, nextSums);
  }

  traverse(root);
  return result;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let tree = new TreeNode(
  10,
  new TreeNode(
    5,
    new TreeNode(3, new TreeNode(3, null, null), new TreeNode(-2, null, null)),
    new TreeNode(2, null, new TreeNode(1, null, null))
  ),
  new TreeNode(-3, null, new TreeNode(11, null, null))
);

console.log(pathSum(tree, 8));
