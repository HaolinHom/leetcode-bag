const utils = require('../utils');
const lengthOfLongestSubstring = require('./index');

const testData = utils.getEachTestParams([
  {
    args: ['abcabcbb'],
    expected: 3,
  },
  {
    args: ['bbbbb'],
    expected: 1,
  },
  {
    args: ['pwwkew'],
    expected: 3,
  },
  {
    args: ['dvdf'],
    expected: 3,
  },
]);

test.each(testData)(
  '无重复字符的最长子串(%s): ',
  (str, expected) => {
    expect(lengthOfLongestSubstring(str)).toEqual(expected);
  }
);

// test command: jest hot100/003_无重复字符的最长子串/index.test.js
