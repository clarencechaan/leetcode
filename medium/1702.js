/**
 * @param {string} binary
 * @return {string}
 */
// 1) change all "10" into "01" from the leftmost "0" onwards
// 2) change all "00" into "10"
var maximumBinaryString = function (binary) {
  let arr = binary.split("");
  const idx = arr.findIndex((n) => n === "0");
  if (idx === -1) return binary;

  let sub = arr.slice(idx);
  const sub0count = sub.filter((n) => n === "0").length;
  const sub1count = sub.filter((n) => n === "1").length;
  const sub0 = [...Array(sub0count - 1).fill("1"), "0"];
  const sub1 = Array(sub1count).fill("1");
  sub = [...sub0, ...sub1];

  arr = [...arr.slice(0, idx), ...sub];

  return arr.join("");
};

console.log(maximumBinaryString("000110"));
