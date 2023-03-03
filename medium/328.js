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
var oddEvenList = function (head) {
  let left = new ListNode();
  let right = new ListNode();
  let leftCurr = left;
  let rightCurr = right;

  let curr = head;
  let odd = true;
  while (curr) {
    if (odd) {
      leftCurr.next = curr;
      leftCurr = leftCurr.next;
    } else {
      rightCurr.next = curr;
      rightCurr = rightCurr.next;
    }
    curr = curr.next;
    odd = !odd;
  }

  rightCurr.next = null;
  leftCurr.next = right.next;
  return left.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let list = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);

console.log(oddEvenList(list));
