/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  let digits = "";
  for (const char of number) if (char >= "0" && char <= "9") digits += char;

  let result = "";
  for (let i = 0; i < digits.length - 4; i += 3) {
    result += digits.substring(i, i + 3) + "-";
  }

  let finalDigits = digits.length % 3;
  if (finalDigits === 0 || finalDigits === 1) finalDigits += 3;

  if (finalDigits === 2 || finalDigits === 3)
    result += digits.slice(-finalDigits);
  else if (finalDigits === 4)
    result += digits.slice(-4, -2) + "-" + digits.slice(-2);

  return result;
};

console.log(reformatNumber("123 4-5678"));
