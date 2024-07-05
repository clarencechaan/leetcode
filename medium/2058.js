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
var nodesBetweenCriticalPoints = function (head) {
  const vals = [];
  let curr = head;
  while (curr) {
    vals.push(curr.val);
    curr = curr.next;
  }

  const criticalPoints = [];
  for (let i = 1; i < vals.length - 1; i++)
    if (
      (vals[i] > vals[i - 1] && vals[i] > vals[i + 1]) ||
      (vals[i] < vals[i - 1] && vals[i] < vals[i + 1])
    )
      criticalPoints.push(i);

  if (criticalPoints.length <= 1) return [-1, -1];

  let minDist = Infinity;
  for (let i = 1; i < criticalPoints.length; i++)
    minDist = Math.min(minDist, criticalPoints[i] - criticalPoints[i - 1]);

  const maxDist = criticalPoints[criticalPoints.length - 1] - criticalPoints[0];

  return [minDist, maxDist];
};
