/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
  const map = {};
  for (const description of descriptions) {
    if (!map[description[0]])
      map[description[0]] = new TreeNode(description[0]);
    if (!map[description[1]])
      map[description[1]] = new TreeNode(description[1]);
  }

  for (const [parent, child, isLeft] of descriptions)
    if (isLeft) map[parent].left = map[child];
    else map[parent].right = map[child];

  const root = new Set(descriptions.map((d) => d[0]));
  for (const [, child] of descriptions) root.delete(child);
  return map[[...root][0]];
};
