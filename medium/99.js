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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let nodes = [];
  let vals = [];

  (function traverse(root, greaterThan = -Infinity, lessThan = Infinity) {
    if (!root) return;
    vals.push(root.val);
    nodes.push({ val: root.val, greaterThan, lessThan });
    traverse(root.left, greaterThan, root.val);
    traverse(root.right, root.val, lessThan);
  })(root);

  let swaps = [];
  for (let i = 0; i < vals.length - 1; i++)
    for (let j = i + 1; j < vals.length; j++) swaps.push([vals[i], vals[j]]);

  let swapToMake = null;
  for (const swap of swaps) {
    let validSwap = true;
    for (const node of nodes) {
      let replacedNode = { ...node };
      if (node.val === swap[0]) replacedNode.val = swap[1];
      else if (node.val === swap[1]) replacedNode.val = swap[0];
      if (node.greaterThan === swap[0]) replacedNode.greaterThan = swap[1];
      else if (node.greaterThan === swap[1]) replacedNode.greaterThan = swap[0];
      if (node.lessThan === swap[0]) replacedNode.lessThan = swap[1];
      else if (node.lessThan === swap[1]) replacedNode.lessThan = swap[0];
      if (
        replacedNode.val <= replacedNode.greaterThan ||
        replacedNode.val >= replacedNode.lessThan
      ) {
        validSwap = false;
        break;
      }
    }
    if (validSwap) {
      swapToMake = swap;
      break;
    }
  }

  (function makeSwap(root) {
    if (!root) return;
    if (root.val === swapToMake[0]) root.val = swapToMake[1];
    else if (root.val === swapToMake[1]) root.val = swapToMake[0];
    makeSwap(root.left);
    makeSwap(root.right);
  })(root);

  return root;
};
