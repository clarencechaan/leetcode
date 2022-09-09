/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// recursion
var postorder = function (root) {
  if (!root) return [];

  let childrenPostorder = [];
  for (const child of root.children) {
    childrenPostorder.push(...postorder(child));
  }

  return [...childrenPostorder, root.val];
};
