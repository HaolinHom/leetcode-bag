/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const cfg = {
    '(': '',
    '[': '',
    '{': '',
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const len = s.length;

  let storage = [];

  for (let i = 0; i < len; i++) {
    if (s[i] === ' ') {
      continue;
    }

    if (storage[storage.length - 1] === cfg[s[i]]) {
      storage.pop();
    } else {
      storage.push(s[i]);
    }
  }

  return storage.length === 0;
};

module.exports = isValid;
