const utils = require('../utils');
const longestPalindrome = require('./index');

const testData = utils.getEachTestParams([
  {
    args: ['babad'],
    expected: ['bab', 'aba'],
  },
  {
    args: ['cbbd'],
    expected: ['bb'],
  },
  {
    args: ['abcda'],
    expected: ['a'],
  },
  {
    args: ['abcdd'],
    expected: ['dd'],
  },
  {
    args: ['a'],
    expected: ['a'],
  },
  {
    args: [''],
    expected: [''],
  },
  {
    args: ['ac'],
    expected: ['a'],
  },
  {
    args: ['ccc'],
    expected: ['ccc'],
  },
  {
    args: ['alevelca'],
    expected: ['level'],
  },
]);

test.each(testData)(
  '最长回文子串(%j): ',
  (str, expected) => {
    expect(expected).toContain(longestPalindrome(str));
  }
);

// test command: jest hot100/005_最长回文子串/index.test.js