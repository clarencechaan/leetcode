/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
  nums = new Set(nums);

  let result = new ListNode(_, head);
  let curr = result;

  while (curr) {
    while (curr.next && nums.has(curr.next.val)) curr.next = curr.next.next;
    curr = curr.next;
  }

  return result.next;
};
