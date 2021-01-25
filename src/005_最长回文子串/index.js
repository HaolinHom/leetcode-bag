/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

  function isPalindrome(str) {
    const strLen = str.length;

    if (strLen === 0) {
      return false;
    } else if (strLen === 1) {
      return true;
    }

    let result = true;

    let headIndex = 0;
    let tailIndex = str.length - 1;

    while (headIndex < tailIndex) {
      if (result && str[headIndex] !== str[tailIndex] ) {
        result = false;
        break;
      }
      headIndex++;
      tailIndex--;
    }

    return result;
  }

  const strLen = s.length;
  if (strLen === 0 || strLen === 1) {
    return s;
  }
  const lastIndex = strLen - 1;

  let result = '';
  let storage = 0;

  let benchmarkIndex = 0;
  let cursorIndex = benchmarkIndex + 1;

  let tempStr, tempCursor;

  while (benchmarkIndex < lastIndex) {
    tempCursor = cursorIndex;

    tempStr = s.slice(benchmarkIndex, cursorIndex + 1);
    if (isPalindrome(tempStr) && tempStr.length > storage) {
      result = tempStr;
      storage = result.length;

      if (cursorIndex === lastIndex) {
        benchmarkIndex++;
        cursorIndex = benchmarkIndex;
      }
    }

    if (cursorIndex === lastIndex) {
      benchmarkIndex++;
      cursorIndex = benchmarkIndex;
    }

    if (storage >= strLen - benchmarkIndex) {
      break;
    }

    cursorIndex++;
  }

  return result === '' ? s[0] : result;
};

module.exports = longestPalindrome;
