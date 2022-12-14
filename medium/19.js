/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let size = 0;

  let curr = head;
  while (curr) {
    size++;
    curr = curr.next;
  }

  const m = size - n;
  let i = 0;
  let resultList = new ListNode();
  let resultCurr = resultList;
  curr = head;

  while (curr) {
    if (i !== m) {
      resultCurr.next = new ListNode(curr.val);
      resultCurr = resultCurr.next;
    }
    curr = curr.next;
    i++;
  }

  return resultList.next;
};
