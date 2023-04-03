/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  let dp = [];
  for (let i = 0; i < s1.length + 1; i++) dp[i] = Array(s2.length + 1);

  function recurse(idx1 = 0, idx2 = 0) {
    if (dp[idx1][idx2] !== undefined) return dp[idx1][idx2];

    let result;
    if (idx1 === s1.length && idx2 === s2.length) result = 0;
    else if (idx1 === s1.length)
      result = s2.charCodeAt(idx2) + recurse(idx1, idx2 + 1);
    else if (idx2 === s2.length)
      result = s1.charCodeAt(idx1) + recurse(idx1 + 1, idx2);
    else if (s1[idx1] === s2[idx2]) result = recurse(idx1 + 1, idx2 + 1);
    else
      result = Math.min(
        s1.charCodeAt(idx1) + recurse(idx1 + 1, idx2),
        s2.charCodeAt(idx2) + recurse(idx1, idx2 + 1)
      );

    dp[idx1][idx2] = result;
    return result;
  }

  return recurse();
};

console.log(
  minimumDeleteSum(
    "igijekdtywibepwonjbwykkqmrgmtybwhwjiqudxmnniskqjfbkpcxukrablqmwjndlhblxflgehddrvwfacarwkcpmcfqnajqfxyqwiugztocqzuikamtvmbjrypfqvzqiwooewpzcpwhdejmuahqtukistxgfafrymoaodtluaexucnndlnpeszdfsvfofdylcicrrevjggasrgdhwdgjwcchyanodmzmuqeupnpnsmdkcfszznklqjhjqaboikughrnxxggbfyjriuvdsusvmhiaszicfa",
    "ikhuivqorirphlzqgcruwirpewbjgrjtugwpnkbrdfufjsmgzzjespzdcdjcoioaqybciofdzbdieegetnogoibbwfielwungehetanktjqjrddkrnsxvdmehaeyrpzxrxkhlepdgpwhgpnaatkzbxbnopecfkxoekcdntjyrmmvppcxcgquhomcsltiqzqzmkloomvfayxhawlyqxnsbyskjtzxiyrsaobbnjpgzmetpqvscyycutdkpjpzfokvi"
  )
);
