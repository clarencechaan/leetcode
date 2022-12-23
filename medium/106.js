/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const preorder = [...postorder].reverse();
  let tempInorder = [...inorder];
  let treeIndices = {};

  for (const val of preorder) {
    const index = tempInorder.indexOf(val);
    treeIndices[val] = { index };
    tempInorder[index] = null;

    let left = index;
    for (let i = left - 1; typeof tempInorder[i] === "number"; i--) left = i;

    let right = index;
    for (let i = right + 1; typeof tempInorder[i] === "number"; i++) right = i;

    treeIndices[val].left = left;
    treeIndices[val].right = right;
  }

  function recurse(val = preorder[0]) {
    if (val === null) return null;

    const leftRange = [treeIndices[val].left, treeIndices[val].index - 1];
    const rightRange = [treeIndices[val].index + 1, treeIndices[val].right];

    let tree = new TreeNode(val);

    let leftVal = null;
    let rightVal = null;
    for (const val in treeIndices) {
      if (
        treeIndices[val].left === leftRange[0] &&
        treeIndices[val].right === leftRange[1]
      )
        leftVal = parseInt(val);
      else if (
        treeIndices[val].left === rightRange[0] &&
        treeIndices[val].right === rightRange[1]
      )
        rightVal = parseInt(val);
    }

    tree.left = recurse(leftVal);
    tree.right = recurse(rightVal);

    return tree;
  }

  return recurse();
};
