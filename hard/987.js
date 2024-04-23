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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  let minCol = 0;

  // add a `row` and `col` attribute for each node denoting the row and column
  // that the node is in
  function markRowCol(root, row = 0, col = 0) {
    if (!root) return;
    minCol = Math.min(minCol, col);
    root.row = row;
    root.col = col;
    markRowCol(root.left, row + 1, col - 1);
    markRowCol(root.right, row + 1, col + 1);
  }

  markRowCol(root);

  // put the nodes in the proper column
  function getVertOrdTrav(root, result = []) {
    if (!root) return;
    const idx = root.col - minCol;
    if (!result[idx]) result[idx] = [];
    result[idx].push(root);
    getVertOrdTrav(root.left, result);
    getVertOrdTrav(root.right, result);
    return result;
  }

  let result = getVertOrdTrav(root);

  // sort the nodes of each column by their row in ascending order
  for (const column of result)
    column.sort((a, b) =>
      a.row > b.row || (a.row === b.row && a.val > b.val) ? 1 : -1
    );
  result = result.map((column) => column.map((node) => node.val));
  return result;
};
