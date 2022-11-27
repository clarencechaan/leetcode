/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let curr = head;
  while (curr) {
    if (curr.seen) return true;
    curr.seen = true;
    curr = curr.next;
  }
  return false;
};
