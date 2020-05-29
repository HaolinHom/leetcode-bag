module.exports = {
  namespace: 'utils',
  getEachTestParams(testData) {
    if (Array.isArray(testData)) {
      return testData.map((item) => {
        if (!Array.isArray(item.args)) {
          item.args = [];
        }
        if (item.expected) {
          item.args.push(item.expected);
        }
        return item.args;
      });
    }
    return [];
  }
};