/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];

  function recurse(root, depth = 0) {
    if (!root) return;
    if (!result[depth]) result[depth] = [];
    result[depth].push(root.val);
    for (const child of root.children) recurse(child, depth + 1);
  }

  recurse(root);
  return result;
};
