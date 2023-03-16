/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let digits1 = 0;
  let digits2 = 0;
  let curr1 = l1;
  let curr2 = l2;

  while (curr1) {
    digits1++;
    curr1 = curr1.next;
  }

  while (curr2) {
    digits2++;
    curr2 = curr2.next;
  }

  if (digits2 > digits1)
    [l1, l2, digits1, digits2] = [l2, l1, digits2, digits1];

  curr1 = l1;
  curr2 = l2;
  while (digits1 > digits2) {
    digits1--;
    curr1 = curr1.next;
  }

  while (curr1 && curr2) {
    curr1.val += curr2.val;
    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  let done = false;
  l1 = new ListNode(0, l1);
  while (!done) {
    done = true;
    curr1 = l1;
    while (curr1) {
      if (curr1.next?.val >= 10) {
        curr1.val++;
        curr1.next.val -= 10;
        done = false;
      }
      curr1 = curr1.next;
    }
  }

  return l1.val ? l1 : l1.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let l1 = new ListNode(
  7,
  new ListNode(2, new ListNode(4, new ListNode(3, null)))
);
let l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

console.log(addTwoNumbers(l1, l2));
