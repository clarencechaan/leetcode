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
var insertGreatestCommonDivisors = function (head) {
  function getGCD(a, b) {
    if (a % b === 0) return b;
    return getGCD(b, a % b);
  }

  let curr = head;
  while (curr && curr.next) {
    const num1 = curr.val;
    const num2 = curr.next.val;
    const gcd = getGCD(num1, num2);
    const node = new ListNode(gcd);

    node.next = curr.next;
    curr.next = node;

    curr = node.next;
  }

  return head;
};
