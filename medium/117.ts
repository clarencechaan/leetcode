/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let siblingsArr = [];

  (function buildSiblings(node, depth = 0) {
    if (!node) return;
    if (!siblingsArr[depth]) siblingsArr[depth] = [];
    siblingsArr[depth].push(node);
    buildSiblings(node.left, depth + 1);
    buildSiblings(node.right, depth + 1);
  })(root);

  for (const siblings of siblingsArr)
    for (let i = 0; i < siblings.length; i++)
      siblings[i].next = siblings[i + 1] || null;

  return root;
};
