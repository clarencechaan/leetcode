/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let between = s.split("|");

  let result = 0;
  for (let i = 0; i < between.length; i += 2)
    result += between[i].length - between[i].replaceAll("*", "").length;

  return result;
};

console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));
