/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  function setsIntersect(a, b) {
    for (const elem of a) if (b.has(elem)) return true;
    return false;
  }

  let emails = [];
  for (const account of accounts) emails.push(new Set(account.slice(1)));

  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < emails.length; i++)
      for (let j = i + 1; j < emails.length; j++)
        if (emails[i] && emails[j] && setsIntersect(emails[i], emails[j])) {
          emails[j].forEach((e) => emails[i].add(e));
          emails[j] = null;
          done = false;
        }
  }

  emails = emails.map(
    (set, idx) => set && [accounts[idx][0], ...[...set].sort()]
  );
  emails = emails.filter((e) => e);
  return emails;
};

console.log(
  accountsMerge([
    ["David", "David0@m.co", "David1@m.co"],
    ["David", "David3@m.co", "David4@m.co"],
    ["David", "David4@m.co", "David5@m.co"],
    ["David", "David2@m.co", "David3@m.co"],
    ["David", "David1@m.co", "David2@m.co"],
  ])
);
