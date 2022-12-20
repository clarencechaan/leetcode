/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let leftList = new ListNode();
  let currLeft = leftList;
  let rightList = new ListNode();
  let currRight = rightList;

  let curr = head;
  while (curr) {
    if (curr.val < x) {
      currLeft.next = curr;
      currLeft = currLeft.next;
    } else {
      currRight.next = curr;
      currRight = currRight.next;
    }
    curr = curr.next;
  }

  currRight.next = null;
  currLeft.next = rightList.next;

  return leftList.next;
};
