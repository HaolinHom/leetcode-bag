/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  console.time();
  let len = height.length;

  let loop = 0;

  let leftCursor = 0;
  let rightCursor = len - 1;

  let calcLeft = leftCursor < loop;
  let calcRight = rightCursor > loop;

  let tempLeft = 0;
  let tempRight = 0;
  let temp = 0;

  let area = 0;

  while (loop < len) {

    while (calcLeft || calcRight) {
      if (calcLeft) {
        if (height[leftCursor] >= height[loop]) {
          tempLeft = height[loop] * (loop - leftCursor);
          calcLeft = false;
        } else {
          leftCursor++;
          calcLeft = leftCursor < loop;
        }
      }

      if (calcRight) {
        if (height[rightCursor] >= height[loop]) {
          tempRight = height[loop] * (rightCursor - loop);
          calcRight = false;
        } else {
          rightCursor--;
          calcRight = rightCursor > loop;
        }
      }

      if (!calcLeft && !calcRight) {
        temp = Math.max(tempLeft, tempRight);
      }
    }

    area = Math.max(area, temp);

    loop++;

    leftCursor = 0;
    rightCursor = len - 1;

    calcLeft = leftCursor < loop;
    calcRight = rightCursor > loop;

    tempLeft = 0;
    tempRight = 0;
    temp = 0;
  }
  console.timeEnd();
  return area;
};

module.exports = maxArea;