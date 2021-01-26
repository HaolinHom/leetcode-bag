const utils = require('../../utils');
const longestCommonPrefix = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [['flower', 'flow', 'flight']],
    expected: 'fl',
  },
  {
    args: [['dog', 'racecar', 'car']],
    expected: '',
  },
  {
    args: [[]],
    expected: '',
  },
  {
    args: [['abcd']],
    expected: 'abcd',
  },
  {
    args: [['ab', 'a']],
    expected: 'a',
  },
  {
    args: [['abab', 'aba', '']],
    expected: '',
  },
]);

test.each(testData)(
  '最长公共前缀 (输入: %j，目标值: "%s"): ',
  (strArr, expected) => {
    expect(longestCommonPrefix(strArr)).toEqual(expected);
  }
);

// test command: jest src/014_最长公共前缀/index.test.js
