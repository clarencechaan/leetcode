/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  // return command.replaceAll("()", "o").replaceAll("(al)", "al");

  let result = "";

  for (let i = 0; i < command.length; i++) {
    if (command.substring(i, i + 2) === "()") {
      result += "o";
      i++;
    } else if (command.substring(i, i + 4) === "(al)") {
      result += "al";
      i += 3;
    } else result += command[i];
  }

  return result;
};
