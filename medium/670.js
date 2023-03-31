/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let arr = num.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    let swap = -1;
    for (let j = i + 1; j < arr.length; j++)
      if ((swap === -1 && arr[j] > arr[i]) || arr[j] >= arr[swap]) swap = j;
    if (swap !== -1) {
      [arr[i], arr[swap]] = [arr[swap], arr[i]];
      return parseInt(arr.join(""));
    }
  }

  return num;
};

console.log(maximumSwap(1234));
