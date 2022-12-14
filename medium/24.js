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
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let a = head;
  let b = head.next;
  let result = b;

  while (a && b) {
    const a2 = a.next?.next || null;
    const b2 = b.next?.next || null;
    b.next = a;
    a.next = b2 || a2;
    a = a2;
    b = b2;
  }

  return result;
};
