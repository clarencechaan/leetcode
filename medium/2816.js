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
var doubleIt = function (head) {
  // idea:
  // 1. traverse the list, keeping track of the number so far
  // 2. double the number
  // 3. if the number has increased in digits, add a node in front of the head
  // 4. traverse the list again, overwriting the digit with the corresponding digit of the doubled number

  let num = "";
  let curr = head;
  while (curr) {
    num += curr.val;
    curr = curr.next;
  }

  const doubled = (BigInt(num) * 2n).toString();
  if (doubled.length > num.length) head = new ListNode(_, head);

  curr = head;
  let idx = 0;
  while (curr) {
    curr.val = parseInt(doubled[idx]);
    curr = curr.next;
    idx++;
  }

  return head;
};
