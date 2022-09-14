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
var deleteDuplicates = function (head) {
  function recurse(head, prev) {
    if (!head) return null;
    if (head.val !== prev?.val && head.val !== head.next?.val) {
      head.next = recurse(head.next, head);
      return head;
    } else return recurse(head.next, head);
  }

  let h = head;
  return recurse(h, null);
};
