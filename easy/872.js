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
 * @return {boolean}
 */
// 1) get leaf value sequence of each tree (DFS, recursion)
// 2) return true if both sequences is equal
var leafSimilar = function (root1, root2) {
  return arrEqual(getSequence(root1), getSequence(root2));
};

function getSequence(root) {
  if (!root) return [];
  else if (!root.left && !root.right) return [root.val];
  else return [...getSequence(root.left), ...getSequence(root.right)];
}

function arrEqual(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }
  return true;
}
