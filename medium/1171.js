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
var removeZeroSumSublists = function (head) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let runningSum = [0];
  let sum = 0;
  for (const val of arr) {
    sum += val;
    runningSum.push(sum);
  }

  let map = {};
  for (let i = 0; i < runningSum.length; i++)
    if (map[runningSum[i]] !== undefined) {
      arr = [...arr.slice(0, map[runningSum[i]]), ...arr.slice(i)];
      runningSum = [
        ...runningSum.slice(0, map[runningSum[i]]),
        ...runningSum.slice(i),
      ];
      map = {};
      i = -1;
    } else map[runningSum[i]] = i;

  arr = arr.map((val) => new ListNode(val));
  for (let i = 0; i < arr.length - 1; i++) arr[i].next = arr[i + 1];
  return arr[0] || null;
};
