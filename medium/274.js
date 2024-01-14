/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  function isHIndexValid(hIndex) {
    let count = 0;
    for (const c of citations) {
      if (c >= hIndex) count++;
      if (count >= hIndex) return true;
    }
    return false;
  }

  for (let hIndex = citations.length; hIndex >= 0; hIndex--)
    if (isHIndexValid(hIndex)) return hIndex;
};

console.log(hIndex([3, 0, 6, 1, 5]));
