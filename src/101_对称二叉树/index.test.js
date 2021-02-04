const utils = require('../../utils');
const isSymmetric = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [
      utils.createTreeNode([1,2,2,3,4,4,3,5,6,7,8,8,7,6,5])
    ],
    expected: true,
  },
  {
    args: [
      utils.createTreeNode([1,2,2,null,3,null,3])
    ],
    expected: false,
  },
  {
    args: [
      utils.createTreeNode([])
    ],
    expected: true,
  },
]);

test.each(testData)(
  '对称二叉树: ',
  (root, expected) => {
    expect(isSymmetric(root)).toEqual(expected);
  }
);

// test command: jest src/101_对称二叉树/index.test.js