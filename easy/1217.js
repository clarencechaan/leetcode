/**
 * @param {number[]} position
 * @return {number}
 */
// 1) count the number of chips in an odd position
// 2) count the number of chips in an even position
// 3) the higher number correlates to target position, as cost of any even->even
//    and odd->odd transfers is 0
// 4) return the lower number as cost of any even->odd and odd->even transfers
//    is 0
var minCostToMoveChips = function (position) {
  const even = position.filter((chip) => chip % 2 === 0).length;
  return Math.min(even, position.length - even);
};

console.log(minCostToMoveChips([1, 2, 3]));
