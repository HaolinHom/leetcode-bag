/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let result = '1';

  if (n === 1) {
    return result;
  }

  let storage = '';
  let count = 0;
  let prev = '';

  let i = 1;
  while (i < n) {
    storage = '';
    count = 1;
    prev = result[0];

    for (let j = 0; j < result.length; j++) {
      if (result[j] === result[j + 1]) {
        count++;
      } else {
        storage += `${count}${prev}`;
        count = 1;
        prev = result[j + 1];
      }
    }

    result = storage;

    i++;
  }

  return result;
};

module.exports = countAndSay;