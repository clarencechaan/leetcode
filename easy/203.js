/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let newList = new ListNode();
  let newCurr = newList;
  let curr = head;

  while (curr) {
    if (curr.val !== val) {
      newCurr.next = new ListNode(curr.val);
      newCurr = newCurr.next;
    }
    curr = curr.next;
  }

  return newList.next;
};
