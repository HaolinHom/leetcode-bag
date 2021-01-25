const utils = require('../../utils');
const letterCombinations = require('./index');

const testData = utils.getEachTestParams([
  {
    args: ['23'],
    expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
  },
]);

test.each(testData)(
  '三数之和(%j): ',
  (digits, expected) => {
    const result = letterCombinations(digits);

    expect(result).toEqual(
      expect.arrayContaining(expected)
    );
    expect(result).toHaveLength(expected.length);
  }
);

// test command: jest hot100/017_电话号码的字母组合/index.test.js
