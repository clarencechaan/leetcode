/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replaceAll(" ", "");
  let arr = s.split("");
  let pMap = {};

  let pIdx = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") pIdx.push(i);
    else if (arr[i] === ")") pMap[pIdx.pop()] = i;
  }

  function recurse(left = 0, right = arr.length) {
    let sign = 1;
    let sum = 0;
    let num = "";
    for (let i = left; i <= right; i++) {
      if ("0" <= arr[i] && arr[i] <= "9") num += arr[i];
      else {
        if (num) {
          sum += parseInt(num) * sign;
          num = "";
        }
        if (arr[i] === "(") {
          sum += recurse(i + 1, pMap[i]) * sign;
          i = pMap[i];
        } else if (arr[i] === "-") sign = -1;
        else if (arr[i] === "+") sign = 1;
      }
    }
    return sum;
  }

  return recurse();
};

console.log(calculate("1 + 1"));
