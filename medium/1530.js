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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
  let leaves = [];

  (function getLeaves(root, depth = 0) {
    if (!root) return;
    root.depth = depth;
    if (!root.left && !root.right) {
      leaves.push(root);
      return;
    }
    if (root.left) root.left.parent = root;
    if (root.right) root.right.parent = root;
    getLeaves(root.left, depth + 1);
    getLeaves(root.right, depth + 1);
  })(root);

  function isValidPair(root1, root2, dist = 0) {
    if (dist > distance) return false;
    if (root1 === root2) return true;
    return isValidPair(
      root1.depth >= root2.depth ? root1.parent : root1,
      root2.depth >= root1.depth ? root2.parent : root2,
      dist +
        (root1.depth >= root2.depth ? 1 : 0) +
        (root2.depth >= root1.depth ? 1 : 0)
    );
  }

  let result = 0;
  for (let i = 0; i < leaves.length; i++)
    for (let j = i + 1; j < leaves.length; j++)
      if (isValidPair(leaves[i], leaves[j])) result++;
  return result;
};
