/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  let result = [];
  let curr = head;
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }

  for (let i = 0; i < result.length; i++) {
    let nextGreaterNode = 0;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] > result[i]) {
        nextGreaterNode = result[j];
        break;
      }
    }
    result[i] = nextGreaterNode;
  }

  return result;
};
