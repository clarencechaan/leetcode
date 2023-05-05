/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  let streak = 1;
  let max = streak;
  let prev;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      if (!prev || prev === ">") streak++;
      else streak = 2;
      prev = "<";
    } else if (arr[i - 1] > arr[i]) {
      if (!prev || prev === "<") streak++;
      else streak = 2;
      prev = ">";
    } else {
      streak = 1;
      prev = "";
    }
    max = Math.max(max, streak);
  }

  return max;
};

console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]));
