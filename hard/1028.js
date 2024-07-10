/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
  const nodes = [["", 0]];

  function getNum(idx) {
    let i = idx;
    while (traversal[i] && traversal[i] !== "-") i++;
    return traversal.slice(idx, i);
  }

  function getDashCount(idx) {
    let i = idx;
    while (traversal[i] === "-") i++;
    return i - idx;
  }

  for (let i = 0; i < traversal.length; ) {
    const num = getNum(i);
    const dashCount = getDashCount(i);
    if (num) {
      nodes[nodes.length - 1][0] = +num;
      i += num.toString().length;
    } else {
      nodes.push(["", dashCount]);
      i += dashCount;
    }
  }

  const root = new TreeNode(nodes[0][0]);
  const lastNodeOfDepth = [root];

  for (let i = 1; i < nodes.length; i++) {
    const [val, depth] = nodes[i];
    const node = new TreeNode(val);
    const parent = lastNodeOfDepth[depth - 1];

    if (!parent.left) parent.left = node;
    else parent.right = node;

    lastNodeOfDepth[depth] = node;
  }

  return root;
};
