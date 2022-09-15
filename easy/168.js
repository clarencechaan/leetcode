/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let remaining = columnNumber;
  let str = "";
  for (let i = 0; remaining > 0; i++) {
    const digit = (remaining / Math.pow(26, i)) % 26 || 26;
    remaining -= digit * Math.pow(26, i);
    str = letter(digit) + str;
  }
  return str;
};

function letter(position) {
  return String.fromCharCode(position + 64);
}

console.log(convertToTitle(2137));

// BZY = 2*26^2 + 26*26^1 + 25*26

// x1*26^2 + x2*26^1 + x3*26^0

// A   ->     1 =                      1*26^0 =                1
// C   ->     3 =                      3*26^0 =                3
// Z   ->    26 =                     26*26^0 =               26
// AA  ->    27 =            1*26^1 +  1*26^0 =          26 +  1
// CD  ->    82 =            3*26^1 +  4*26^0 =          78 +  4
// ZZ  ->   702 =           26^26^1 + 26*26^0 =         676 + 26
// AAA ->   703 =  1*26^2 +  1*26^1 +  1*26^0 =   676 +  26 +  1
// CDE ->  2137 =  3*26^2 +  4*26^1 +  5*26^0 =  2028 + 104 +  5
// ZZZ -> 18278 = 26*26^2 + 26*26^1 + 26*26^0 = 17576 + 676 + 26

// CDE
// 2028 / 26 / 26 = 3 = C
// 104 / 26 = 4 = D
// 5 = E

// 2137 % 26 = 5 = E
// -> 5 = 5
// 2132 / 26 % 26 = 4 = D
// -> 104 = 4 * 26
// 2028 / 26 / 26 = 3 = C
