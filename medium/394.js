/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  function shallowDecodeWord(encoded) {
    let count = parseInt(encoded.substring(0, encoded.indexOf("[")));
    let str = encoded.substring(encoded.indexOf("[") + 1, encoded.length - 1);
    if (count) return str.repeat(count);
    else return encoded;
  }

  function shallowDecode(s) {
    let result = [];
    let bracket = 0;
    let str = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "[") bracket++;
      else if (s[i] === "]") bracket--;
      if (str && (str[0] < "0" || str[0] > "9") && s[i] >= "0" && s[i] <= "9") {
        result.push(str);
        str = "";
      }
      str += s[i];
      if (str && str.includes("[") && bracket === 0) {
        result.push(str);
        str = "";
      }
    }
    if (str) result.push(str);
    result = result.map((word) => shallowDecodeWord(word));
    result = result.join("");
    return result;
  }

  let result = s;
  while (result.includes("[")) result = shallowDecode(result);
  let resultArr = result.split("");
  result = "";
  for (const char of resultArr) if (char < "0" || char > "9") result += char;
  return result;
};

console.log(decodeString("3"));
