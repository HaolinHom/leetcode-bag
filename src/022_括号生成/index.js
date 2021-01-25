/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n < 0) {
    return [];
  }
  if (n === 0) {
    return [''];
  }

  n = Math.floor(n);

  if (n === 1) {
    return ['()'];
  }

  let result = [];

  function getLeft(str, left, right, leftCount) {
    if (left > 0) {
      getParenthesis(str + '(', --left, right, ++leftCount);
    }
  }
  function getRight(str, left, right, leftCount) {
    if (right > 0 && leftCount > 0) {
      getParenthesis(str + ')', left, --right, --leftCount);
    }
  }
  function getParenthesis(str, left, right, leftCount) {
    if (left > 0 || right > 0) {
      getLeft(str, left, right, leftCount);
      getRight(str, left, right, leftCount);
    } else {
      result.push(`(${str})`);
    }
  }

  getParenthesis('', n - 1, n - 1, 1);

  return result;
};

module.exports = generateParenthesis;
