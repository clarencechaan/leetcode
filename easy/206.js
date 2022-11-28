/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let newHead = null;
  let curr = head;

  while (curr) {
    const prev = new ListNode(curr.val);
    prev.next = newHead;
    newHead = prev;
    curr = curr.next;
  }

  return newHead;
};
