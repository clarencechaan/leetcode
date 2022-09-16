/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let unique = [];
  for (const email of emails) {
    const domain = email.substring(email.indexOf("@"));
    let local = email.substring(0, email.indexOf("@"));
    while (local.includes(".")) local = local.replaceAll(".", "");
    if (local.includes("+")) local = local.substring(0, local.indexOf("+"));

    const full = local + domain;
    if (!unique.includes(full)) unique.push(full);
  }

  return unique.length;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
