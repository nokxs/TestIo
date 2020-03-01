const sinon = require("sinon");

const fake = sinon.stub();

function compareTime(startTime, endTime, operation, timeToCompare) {
  return fake(startTime, endTime, operation, timeToCompare);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.compareTime = compareTime;
