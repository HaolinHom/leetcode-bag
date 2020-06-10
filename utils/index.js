function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = {
  namespace: 'utils',
  getEachTestParams(testData) {
    if (Array.isArray(testData)) {
      return testData.map((item) => {
        if (!Array.isArray(item.args)) {
          item.args = [];
        }
        if (item.hasOwnProperty('expected')) {
          item.args.push(item.expected);
        }
        return item.args;
      });
    }
    return [];
  },
  createListNode(numArr) {
    let result, temp;
    if (Array.isArray(numArr)) {
      numArr.reverse().forEach((num) => {
        if (result) {
          temp = result;
          result = new ListNode(num);
          result.next = temp;
        } else {
          result = new ListNode(num);
        }
      });
    }
    return result;
  },
};