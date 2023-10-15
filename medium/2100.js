/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
  function isGoodDay(day) {
    if (day < time || day >= security.length - time) return false;
    for (let i = day - time + 1; i <= day; i++)
      if (security[i] > security[i - 1]) return false;
    for (let i = day + 1; i <= day + time; i++)
      if (security[i] < security[i - 1]) return false;
    return true;
  }

  let result = [];
  for (let i = 0; i < security.length; i++) if (isGoodDay(i)) result.push(i);
  return result;
};

console.log(goodDaysToRobBank([5, 3, 3, 3, 5, 6, 2], 2));
