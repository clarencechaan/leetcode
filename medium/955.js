/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let arrs = [];
  for (const str of strs) arrs.push(str.split(""));

  let result = 0;
  for (let i = 1; i < arrs.length; i++) {
    if (arrs[i - 1].join("") > arrs[i].join("")) {
      let deleteIdx = arrs[i - 1].findIndex((a, idx) => a > arrs[i][idx]);
      for (let j = 0; j < arrs.length; j++) arrs[j][deleteIdx] = "";
      result++;
      i = 0;
    }
  }

  return result;
};

console.log(minDeletionSize(["vdy", "vei", "zvc", "zld"]));
