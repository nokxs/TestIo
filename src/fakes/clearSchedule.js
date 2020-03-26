const sinon = require("sinon");

const fake = sinon.stub();

function clearSchedule(schedule) {
  fake(schedule);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.clearSchedule = clearSchedule;
