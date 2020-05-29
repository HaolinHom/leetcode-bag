/**
 * @param {number[]} numArr
 * @return {number[]}
 */
const sortNum = function (numArr) {
  const len = numArr.length;

  let temp;
  
  for (let i = 0; i < len; i++) {
    for(let j = 0; j < len - i; j++) {
      if(numArr[j] > numArr[j + 1]) {
        temp = numArr[j + 1];
        numArr[j + 1] = numArr[j];
        numArr[j] = temp;
      }
    }
  }
  
  return numArr;
};

module.exports = sortNum;