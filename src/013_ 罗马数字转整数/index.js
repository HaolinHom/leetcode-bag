/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  const specialRule = {
    V: 'I',
    X: 'I',
    L: 'X',
    C: 'X',
    D: 'C',
    M: 'C',
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === specialRule[s[i + 1]]) {
      total += romanMap[s.slice(i, i + 2)] || 0;
      i++;
    } else {
      total += romanMap[s[i]] || 0;
    }
  }

  return total;
};

module.exports = romanToInt;