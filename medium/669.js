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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  let arr = [];

  function buildArr(root, depth = 0) {
    if (!root) return;
    if (root.val >= low && root.val <= high) {
      if (!arr[depth]) arr[depth] = [];
      arr[depth].push(root.val);
    }
    buildArr(root.left, depth + 1);
    buildArr(root.right, depth + 1);
  }

  buildArr(root);
  arr = arr.filter((row) => row);
  if (arr.length === 0) return null;

  let tree = null;

  for (const row of arr)
    for (const val of row) {
      if (!tree) {
        tree = new TreeNode(val);
        break;
      }
      let curr = tree;
      while (curr)
        if (val > curr.val)
          if (curr.right) curr = curr.right;
          else {
            curr.right = new TreeNode(val);
            break;
          }
        else if (val < curr.val)
          if (curr.left) curr = curr.left;
          else {
            curr.left = new TreeNode(val);
            break;
          }
    }

  return tree;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let tn = new TreeNode(
  3,
  new TreeNode(0, null, new TreeNode(2, new TreeNode(1, null, null), null)),
  new TreeNode(4, null, null)
);

console.log(trimBST(tn, 1, 3));
