/**
 * @param {string} s
 * @return {number}
 */
var _lengthOfLongestSubstring = function(s) {
  let result = 0;

  const strArr = s.split('');
  const strArrLen = strArr.length;

  let index = 0;
  let cursorIndex = 0;
  let storage = [];
  let storageLen = 0;
  let tag;

  while (index < strArrLen) {

    while (cursorIndex < strArrLen) {
      tag = strArr[cursorIndex];
      if (storage.includes(tag)) {
        break;
      } else {
        storage.push(tag);
        cursorIndex++;
      }
    }

    storageLen = storage.length;
    result = storageLen > result ? storageLen : result;

    ++index;
    cursorIndex = index;
    storage = [];
    storageLen = 0;
    tag = null;

    if (result > (strArrLen - index - 1)) {
      break;
    }
  }

  return result;
};

var lengthOfLongestSubstring = function(s) {
  let result = 0;

  const strLen = s.length;
  let index = 0;
  let cursorIndex = 0;
  let checkIndex;
  let storage = '';

  while (cursorIndex < strLen && result < strLen - index) {
    checkIndex = storage.indexOf(s[cursorIndex]);
    if (checkIndex > -1) {
      index += checkIndex + 1;
    }

    storage = s.slice(index, cursorIndex + 1);
    result = Math.max(storage.length, result);
    cursorIndex++;
  }

  return result;
};

module.exports = lengthOfLongestSubstring;
