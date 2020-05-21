
function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = {
  namespace: 'addTwoNumbersUtils',
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

