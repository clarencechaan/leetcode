/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  let difference = [];
  for (const word of words) {
    let obj = { word };
    let diff = "";
    for (let i = 0; i < word.length - 1; i++)
      diff += word[i + 1].charCodeAt() - word[i].charCodeAt() + ",";
    diff = diff.substring(0, diff.length - 1);
    obj.diff = diff;
    difference.push(obj);
  }

  difference.sort((a, b) => (a.diff > b.diff ? 1 : -1));
  if (difference[0].diff !== difference[1].diff) return difference[0].word;
  else return difference[difference.length - 1].word;
};

console.log(oddString(["aaa", "bob", "ccc", "ddd"]));
