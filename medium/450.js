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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  let arr = [];

  function listNodes(root) {
    if (!root) return;
    if (root.val !== key) arr.push(root.val);
    listNodes(root.left);
    listNodes(root.right);
  }

  listNodes(root);

  if (!arr.length) return null;

  let tree = new TreeNode(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    let curr = tree;
    while (curr) {
      if (arr[i] > curr.val)
        if (curr.right) curr = curr.right;
        else {
          curr.right = new TreeNode(arr[i]);
          break;
        }
      else if (arr[i] < curr.val)
        if (curr.left) curr = curr.left;
        else {
          curr.left = new TreeNode(arr[i]);
          break;
        }
    }
  }
  return tree;
};

let tree = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2, null, null), new TreeNode(4, null, null)),
  new TreeNode(6, null, new TreeNode(7, null, null))
);

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(deleteNode(tree, 3));

//    5
//  3   7
// 2 4 6 8

//    6
//  3   7
// 2 4   8
