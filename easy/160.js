/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let curr = headA;
  while (curr) {
    curr.seen = true;
    curr = curr.next;
  }

  curr = headB;
  while (curr) {
    if (curr.seen) return curr;
    curr = curr.next;
  }

  return null;
};
