/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  if (!preorder.length) return null;

  let left = null;
  let right = null;

  if (preorder.length > 0) {
    let split = 0;
    while (postorder[split] !== preorder[1]) split++;
    left = constructFromPrePost(
      preorder.slice(1, 2 + split),
      postorder.slice(0, split + 1)
    );
    right = constructFromPrePost(
      preorder.slice(2 + split),
      postorder.slice(split + 1, postorder.length - 1)
    );
  }

  return new TreeNode(preorder[0], left, right);
};
