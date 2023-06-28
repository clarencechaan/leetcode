/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  function listExistsAtRoot(head, root) {
    if (!head) return true;
    if (!root) return false;
    if (head.val !== root.val) return false;
    return (
      listExistsAtRoot(head.next, root.left) ||
      listExistsAtRoot(head.next, root.right)
    );
  }

  function traverseTree(root) {
    if (!root) return false;
    return (
      listExistsAtRoot(head, root) ||
      traverseTree(root.left) ||
      traverseTree(root.right)
    );
  }

  return traverseTree(root);
};
