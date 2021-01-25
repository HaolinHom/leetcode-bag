const utils = require('../../utils');
const generateParenthesis = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [2],
    expected: [
      '(())',
      '()()',
    ],
  },
  {
    args: [3],
    expected: [
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ],
  },
  {
    args: [4],
    expected: [
      "(((())))",
      "((()()))",
      "((())())",
      "((()))()",
      "(()(()))",
      "(()()())",
      "(()())()",
      "(())(())",
      "(())()()",
      "()((()))",
      "()(()())",
      "()(())()",
      "()()(())",
      "()()()()",
    ]
  },
]);

test.each(testData)(
  '* 括号生成: ',
  (n, expected) => {
    const result = generateParenthesis(n);
    expect(result).toEqual(
      expect.arrayContaining(expected)
    );
    expect(result).toHaveLength(expected.length);
  }
);

// test command: jest hot100/022_括号生成/index.test.js
