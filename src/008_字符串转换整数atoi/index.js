/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  s = s.trim();

  if (s[0] >= 0) {
    s = '+' + s;
  } else if (s[0] !== '-' && s[0] !== '+') {
    return 0;
  }

  for (let i = 1; i < s.length; i++) {
    if (!(s[i] >= 0 && s[i] !== ' ')) {
      s = s.slice(0, i);
      break;
    }
  }

  if (s.length === 1) {
    return 0;
  }

  s = Number(s);

  if (s < -2147483648) {
    return -2147483648
  } else if (s > 2147483647) {
    return 2147483647
  }

  return s;
};

module.exports = myAtoi;