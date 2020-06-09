/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const cfg = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const len = digits.length;

  if (len === 0) {
    return [];
  }

  let digitArr = [];

  for (let i = 0; i < len; i++) {
    if (digits[i] === '0' || digits[i] === '1' || digits[i] === '*' || digits[i] === '#') {
      return [];
    }
    digitArr.push(cfg[digits[i]].split(''));
  }

  if (digitArr.length === 1) {
    return digitArr[0];
  }

  function getCombinations(storage, rest) {
    let result = [];
    let temp = rest.shift();

    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < storage.length; j++) {
        result.push(storage[j] + temp[i]);
      }
    }

    return rest.length === 0 ? result : getCombinations(result, rest);
  }

  return getCombinations(digitArr.shift(), digitArr);
};

module.exports = letterCombinations;
