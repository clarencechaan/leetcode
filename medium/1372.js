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
var longestZigZag = function (root) {
  let memo = new Map();

  function zigZagLength(root, dir, i = 0, j = 0) {
    if (!root) return -1;
    let memoItem = memo.get(root);
    if (!memoItem) memoItem = {};
    if (memoItem[dir] !== undefined) return memoItem[dir];

    let max;
    if (!dir) max = Math.max(zigZagLength(root, "L"), zigZagLength(root, "R"));
    else if (dir === "L") max = 1 + zigZagLength(root.left, "R");
    else if (dir === "R") max = 1 + zigZagLength(root.right, "L");

    memoItem[dir] = max;
    memo.set(root, memoItem);

    return max;
  }

  function findMaxZigZag(root) {
    if (!root) return 0;
    return Math.max(
      zigZagLength(root),
      findMaxZigZag(root.left),
      findMaxZigZag(root.right)
    );
  }

  return findMaxZigZag(root);
};
