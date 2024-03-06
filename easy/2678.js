/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  // 0..9: phone number
  // 10: gender
  // 11,12: age
  // 13,14: seat

  let result = 0;
  for (const detail of details) {
    const age = parseInt(detail.slice(11, 13));
    if (age > 60) result++;
  }

  return result;
};

console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);
