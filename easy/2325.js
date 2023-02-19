/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let keyArr = new Set();
  for (let i = 0; i < key.length; i++)
    if (key[i] >= "a" && key[i] <= "z") keyArr.add(key[i]);
  keyArr = [...keyArr];

  let decode = {};
  for (let i = 0; i < 26; i++) decode[keyArr[i]] = String.fromCharCode(i + 97);

  let result = [];
  for (const char of message) result.push(decode[char] || " ");
  result = result.join("");

  return result;
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
