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
var mergeNodes = function (head) {
  let curr = head;
  let answerList = new ListNode();
  let answerCurr = answerList;
  let sum = 0;

  while (curr) {
    if (sum && curr.val === 0) {
      answerCurr.next = new ListNode(sum);
      answerCurr = answerCurr.next;
      start = curr;
      sum = 0;
    } else sum += curr.val;
    curr = curr.next;
  }

  return answerList.next;
};
