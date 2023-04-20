/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  let num = rand7();
  while (num === 4) num = rand7();
  if (num < 4) {
    num = rand7();
    while (num > 5) num = rand7();
    return num;
  } else if (num > 4) {
    num = rand7();
    while (num > 5) num = rand7();
    return num + 5;
  }
};
