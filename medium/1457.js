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
var pseudoPalindromicPaths = function (root) {
  function isPseudoPalindromic(arr) {
    let odds = 0;
    for (let i = 0; i < 9; i++)
      if (!arr[i]) continue;
      else if (arr[i] % 2 === 1) odds++;
    return odds <= 1;
  }

  function countPseudoPalindromic(root, arr = Array(9).fill(0)) {
    if (!root) return 0;
    let nextArr = [...arr];
    nextArr[root.val - 1]++;
    if (!root.left && !root.right && isPseudoPalindromic(nextArr)) return 1;
    return (
      countPseudoPalindromic(root.left, nextArr) +
      countPseudoPalindromic(root.right, nextArr)
    );
  }

  return countPseudoPalindromic(root);
};
