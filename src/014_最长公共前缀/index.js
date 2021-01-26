/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  const getLonger = function (a, b) {
    if (b === undefined) {
      return a;
    }

    let max = Math.min(a.length, b.length);
    let lastIndex;

    for (let i = 0; i < max; i++) {
      if (a[i] === b[i]) {
        lastIndex = i;
      } else {
        return lastIndex === undefined ? '' : a.slice(0, lastIndex + 1);
      }
    }

    return lastIndex === undefined ? '' : a.slice(0, lastIndex + 1);
  };

  if (strs.length === 2) {
    return getLonger(strs[0], strs[1]);
  }

  const getLongest = function (arr) {
    if (arr.length === 1) {
      return arr[0];
    }

    let temp = [];

    for (let i = 0; i < arr.length; i = i + 2) {
      temp.push(getLonger(arr[i], arr[i + 1]));
    }

    if (temp.length > 2) {
      return getLongest(temp);
    } else {
      return getLonger(temp[0], temp[1]);
    }
  };

  return getLongest(strs);
};

module.exports = longestCommonPrefix;