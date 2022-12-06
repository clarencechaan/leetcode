/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];
  let result = [root.val];
  for (const child of root.children) result.push(...preorder(child));
  return result;
};
