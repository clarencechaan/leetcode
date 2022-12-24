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
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  let arr = [];

  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  const temp = [...arr].sort((a, b) => (a > b ? 1 : 1));
  arr = [];

  (function reorderArr(subarr) {
    if (!subarr.length) return;
    const idx = Math.floor(subarr.length / 2);
    arr.push(subarr[idx]);
    reorderArr(subarr.slice(0, idx));
    reorderArr(subarr.slice(idx + 1));
  })(temp);

  arr.reverse();

  let root = arr.length ? new TreeNode(arr.pop()) : null;

  function addNode(root, val) {
    if (!root) return;
    if (val > root.val && !root.right) root.right = new TreeNode(val);
    else if (val < root.val && !root.left) root.left = new TreeNode(val);
    else if (val > root.val && root.right) addNode(root.right, val);
    else if (val < root.val && root.left) addNode(root.left, val);
  }

  while (arr.length) addNode(root, arr.pop());

  return root;
};
