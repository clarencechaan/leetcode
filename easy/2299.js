/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  const special = new Set([
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
  ]);

  let validLength = password.length >= 8;
  let validLowerCase = false;
  let validUpperCase = false;
  let validDigit = false;
  let validSpecial = false;

  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "a" && password[i] <= "z") validLowerCase = true;
    else if (password[i] >= "A" && password[i] <= "Z") validUpperCase = true;
    else if (password[i] >= "0" && password[i] <= "9") validDigit = true;
    else if (special.has(password[i])) validSpecial = true;
    if (password[i - 1] === password[i]) return false;
  }

  return (
    validLength &&
    validLowerCase &&
    validUpperCase &&
    validDigit &&
    validSpecial
  );
};

console.log(strongPasswordCheckerII("1aB!"));
