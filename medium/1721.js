/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let n = 0;
  let kthNode = null;

  curr = head;
  while (curr) {
    if (n === k - 1) kthNode = curr;
    curr = curr.next;
    n++;
  }

  curr = head;
  for (let i = 0; i < n - k; i++) curr = curr.next;

  let temp = curr.val;
  curr.val = kthNode.val;
  kthNode.val = temp;

  return head;
};
